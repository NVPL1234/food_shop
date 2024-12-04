package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.OptionCategory;
import com.example.jwt.entity.OptionDetails;

public interface OptionDetailsService {
	public List<OptionDetails> findByOptionCategory(OptionCategory optionCategory);
	public OptionDetails save(OptionDetails optionDetails);
	public void deleteBy(Long optionCategoryId);
}