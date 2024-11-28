package com.example.jwt.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.CustomUserDetails;
import com.example.jwt.entity.User;
import com.example.jwt.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) {
		User user = userRepository.findByUsername(username);
		if(user != null) {
			return new CustomUserDetails(user);
		}
		throw new UsernameNotFoundException(username);
	}
	
	@Override
	public UserDetails loadUserById(Long userId) {
		Optional<User> result = userRepository.findById(userId);
		User user = result.get();
		if(user != null) {
			return new CustomUserDetails(user);
		}
		throw new EntityNotFoundException();
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

	@Override
	public int updatePassword(Long userId, String password) {
		return userRepository.updatePassword(userId, password);
	}
}