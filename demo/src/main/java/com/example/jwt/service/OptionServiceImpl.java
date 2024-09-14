package com.example.jwt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.Option;
import com.example.jwt.repository.OptionRepository;

@Service
public class OptionServiceImpl implements OptionService {
	
	@Autowired
	private OptionRepository optionRepository;

	@Override
	public List<Option> findAll() {
		return optionRepository.findAll();
	}

	@Override
	public Option findById(Long id) {
		Optional<Option> result = optionRepository.findById(id);
		return result.get();
	}

	@Override
	public Option save(Option option) {
		return optionRepository.save(option);
	}

	@Override
	public void deleteById(Long id) {
		optionRepository.deleteById(id);
	}
}