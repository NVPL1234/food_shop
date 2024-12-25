package com.example.foodShop.repository;

import java.util.List;

import com.example.foodShop.dto.OptionDTO;

public interface ProductRepositoryCustom {
	public List<OptionDTO> getOptions(Long productId);
}