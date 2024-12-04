package com.example.jwt.service;

import java.util.List;

import com.example.jwt.dto.OptionDTO;
import com.example.jwt.entity.Product;
import com.example.jwt.entity.ProductCategory;

public interface ProductService {
	public List<OptionDTO> getOptions(Long productId);
	public List<Product> findAll();
	public List<Product> findAll(int pageNumber);
	public Product findById(Long id);
	public List<Product> findByProductName(String productName);
	public List<Product> findByProductCategory(ProductCategory productCategory);
	public Product save(Product product);
	public void deleteById(Long id);
	public long count();
}