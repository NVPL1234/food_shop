package com.example.jwt.service;

import java.util.List;

import com.example.jwt.dto.OptionDTO;
import com.example.jwt.dto.ProductDTO;
import com.example.jwt.entity.Product;

public interface ProductService {
	public List<ProductDTO> getAll();
	public List<OptionDTO> getOptions(Long productId);
	public List<Product> findAll(int pageNumber);
	public Product findById(Long id);
	public Product save(Product product);
	public void deleteById(Long id);
	public long count();
}