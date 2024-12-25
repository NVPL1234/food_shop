package com.example.foodShop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foodShop.entity.OptionCategory;
import com.example.foodShop.entity.OptionDetails;
import com.example.foodShop.repository.OptionDetailsRepository;

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