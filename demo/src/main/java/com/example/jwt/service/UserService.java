package com.example.jwt.service;

import org.springframework.security.core.userdetails.UserDetails;

import com.example.jwt.entity.User;

public interface UserService {
	public UserDetails loadUserById(Long userId);
	public User save(User user);
}