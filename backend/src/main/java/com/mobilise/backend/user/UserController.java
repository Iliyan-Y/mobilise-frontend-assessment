package com.mobilise.backend.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(path = "api/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public void createPlayer(@RequestBody User user) {
    userService.createUser(user);
  }

  @PostMapping(path = "login")
  public String login(@RequestBody Map<String, String > params) {
   return userService.login(params.get("username"), params.get("password"));
  }
}
