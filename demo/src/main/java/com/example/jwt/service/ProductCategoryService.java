package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.ProductCategory;

public interface ProductCategoryService {
	public List<ProductCategory> findAll();
	public ProductCategory findById(Long id);
	public ProductCategory save(ProductCategory productCategory);
	public void deleteById(Long id);
}