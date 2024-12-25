package com.example.foodShop.service;

import java.util.List;

import com.example.foodShop.entity.OptionCategory;

public interface OptionCategoryService {
	public List<OptionCategory> findAll();
	public List<OptionCategory> findAll(int pageNumber);
	public OptionCategory findById(Long id);
	public OptionCategory save(OptionCategory optionCategory);
	public void deleteById(Long id);
	public long count();
}