package com.mobilise.backend.user;



import org.jasypt.util.text.StrongTextEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

  public void createUser(User user) {
    user.setPassword(encrypt(user.getPassword()));
    userRepository.save(user);
    System.out.println("Player " + user + " created !");
  }

  public String login(String username, String password){
    User user = getUserByUsername(username);
    if (decrypt(user.getPassword()).equals(password)) {
      System.out.println("SUCCESS");
      return user.getUsername();
    }else {
      return "Incorrect password";
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
