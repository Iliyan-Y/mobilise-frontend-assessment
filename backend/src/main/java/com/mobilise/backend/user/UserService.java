package com.mobilise.backend.user;



import org.jasypt.util.text.StrongTextEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
  private final UserRepository userRepository;
  private final StrongTextEncryptor textEncryptor = new StrongTextEncryptor();

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
    textEncryptor.setPassword("SuperSecret");
  }

  public User getUserByUsername(String  username) {
    return userRepository.findByUsername(username)
        .orElseThrow(() -> new IllegalStateException("User not found"));
  }

  public Map<String, String> createUser(User user) {
    Optional<User> isUser = userRepository.findByUsername(user.getUsername());
    if (isUser.isPresent()) {
      throw new IllegalStateException("User already exists");
    }

    user.setPassword(encrypt(user.getPassword()));
    userRepository.save(user);
    System.out.println("Player " + user.toString() + " created !");
    return user.toJson();
  }

  public Map<String, String> login(String username, String password){
    User user = getUserByUsername(username);
    if (decrypt(user.getPassword()).equals(password)) {
      return Map.of("userId", user.getId(), "username", user.getUsername());
    }else {
      return Map.of("message","Incorrect password");
    }

  }

  private String encrypt(String myText) {
    String myEncryptedText = textEncryptor.encrypt(myText);
    return myEncryptedText;
  }

  private String decrypt(String myEncryptedText) {
    String plainText = textEncryptor.decrypt(myEncryptedText);
    return  plainText;
  }
}
