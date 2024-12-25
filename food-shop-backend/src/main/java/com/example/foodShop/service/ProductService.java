package com.example.foodShop.service;

import java.util.List;

import com.example.foodShop.dto.OptionDTO;
import com.example.foodShop.entity.Product;
import com.example.foodShop.entity.ProductCategory;

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