package com.example.foodShop.service;

import org.springframework.security.core.userdetails.UserDetails;

import com.example.foodShop.entity.User;

public interface UserService {
	public UserDetails loadUserById(Long userId);
	public User save(User user);
	public int updatePassword(Long userId, String password);
}