package com.example.jwt.repository;

import java.util.List;

import com.example.jwt.dto.OptionDTO;

public interface ProductRepositoryCustom {
	public List<OptionDTO> getOptions(Long productId);
}