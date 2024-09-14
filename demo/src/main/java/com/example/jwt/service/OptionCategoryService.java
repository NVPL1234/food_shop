package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.OptionCategory;

public interface OptionCategoryService {
	public List<OptionCategory> findAll();
	public OptionCategory findById(Long id);
	public OptionCategory save(OptionCategory optionCategory);
	public void deleteById(Long id);
}