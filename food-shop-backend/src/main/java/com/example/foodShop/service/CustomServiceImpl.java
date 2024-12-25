package com.example.foodShop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foodShop.entity.Custom;
import com.example.foodShop.entity.CustomPK;
import com.example.foodShop.repository.CustomRepository;

@Service
public class CustomServiceImpl implements CustomService {
	
	@Autowired
	private CustomRepository customRepository;

	@Override
	public List<Custom> findAll() {
		return customRepository.findAll();
	}

	@Override
	public Custom findById(CustomPK id) {
		Optional<Custom> result = customRepository.findById(id);
		return result.get();
	}

	@Override
	public Custom save(Custom custom) {
		return customRepository.save(custom);
	}

	@Override
	public void deleteById(CustomPK id) {
		customRepository.deleteById(id);
	}
	
	@Override
	public long count() {
		return customRepository.count();
	}
}