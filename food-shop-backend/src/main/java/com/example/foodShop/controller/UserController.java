package com.example.foodShop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodShop.service.UserService;

@RestController
@CrossOrigin()
public class UserController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserService userService;

	@PutMapping("/users")
	public int updatePassword(@RequestParam Long userId, @RequestParam String oldPassword,
			@RequestParam String newPassword) {
		UserDetails user = userService.loadUserById(userId);
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), oldPassword));	
		} catch (Exception e) {
			return 0;
		}
		newPassword = passwordEncoder.encode(newPassword);
		return userService.updatePassword(userId, newPassword);
	}
}