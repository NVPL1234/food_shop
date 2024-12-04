package com.example.jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.OptionCategory;
import com.example.jwt.entity.OptionDetails;
import com.example.jwt.repository.OptionDetailsRepository;

@Service
public class OptionDetailsServiceImpl implements OptionDetailsService {
	
	@Autowired
	private OptionDetailsRepository optionDetailsRepository;

	@Override
	public List<OptionDetails> findByOptionCategory(OptionCategory optionCategory) {
		return optionDetailsRepository.findByOptionCategory(optionCategory);
	}
	
	@Override
	public OptionDetails save(OptionDetails optionDetails) {
		return optionDetailsRepository.save(optionDetails);
	}

	@Override
	public void deleteBy(Long optionCategoryId) {
		optionDetailsRepository.deleteBy(optionCategoryId);
	}
}