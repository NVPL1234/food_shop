package com.example.jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.Custom;
import com.example.jwt.entity.CustomPK;
import com.example.jwt.repository.CustomRepository;

@Service
public class CustomServiceImpl implements CustomService {
	
	@Autowired
	private CustomRepository customRepository;

	@Override
	public List<Custom> findAll() {
		return null;
	}

	@Override
	public Custom findById(CustomPK id) {
		return null;
	}

	@Override
	public Custom save(Custom custom) {
		return customRepository.save(custom);
	}

	@Override
	public void deleteById(CustomPK id) {
	}
}