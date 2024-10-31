package com.example.jwt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.ProductCategory;
import com.example.jwt.repository.ProductCategoryRepository;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService {

	@Autowired
	private ProductCategoryRepository productCategoryRepository;
	
	@Override
	public List<ProductCategory> findAll() {
		return productCategoryRepository.findAll();
	}
	
	@Override
	public List<ProductCategory> findAll(int pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber, 10, Sort.by("productCategoryId"));
		Page<ProductCategory> result = productCategoryRepository.findAll(pageable);
		return result.toList();
	}

	@Override
	public ProductCategory findById(Long id) {
		Optional<ProductCategory> result = productCategoryRepository.findById(id);
		return result.get();
	}

	@Override
	public ProductCategory save(ProductCategory productCategory) {
		return productCategoryRepository.save(productCategory);
	}

	@Override
	public void deleteById(Long id) {
		productCategoryRepository.deleteById(id);
	}
	
	@Override
	public long count() {
		return productCategoryRepository.count();
	}
}