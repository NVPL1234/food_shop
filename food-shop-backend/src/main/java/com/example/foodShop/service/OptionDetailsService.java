package com.example.foodShop.service;

import java.util.List;

import com.example.foodShop.entity.OptionCategory;
import com.example.foodShop.entity.OptionDetails;

public interface OptionDetailsService {
	public List<OptionDetails> findByOptionCategory(OptionCategory optionCategory);
	public OptionDetails save(OptionDetails optionDetails);
	public void deleteBy(Long optionCategoryId);
}