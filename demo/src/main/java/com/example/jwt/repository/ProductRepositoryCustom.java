package com.example.jwt.repository;

import java.util.List;

import com.example.jwt.dto.OptionDTO;
import com.example.jwt.dto.ProductDTO;

public interface ProductRepositoryCustom {
	public List<ProductDTO> getAll();
	public List<OptionDTO> getOptions(Long productId);
}