package com.example.jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.jwt.dto.OptionDTO;
import com.example.jwt.dto.ProductDTO;
import com.example.jwt.entity.Product;
import com.example.jwt.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<ProductDTO> getAll() {
		return productRepository.getAll();
	}
	
	@Override
	public List<OptionDTO> getOptions(Long productId) {
		return productRepository.getOptions(productId);
	}
	
	@Override
	public List<Product> findAll(int pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber, 10, Sort.by("productId"));
		Page<Product> result = productRepository.findAll(pageable);
		return result.toList();
	}

	@Override
	public Product findById(Long id) {
		return null;
	}

	@Override
	public Product save(Product product) {
		return null;
	}

	@Override
	public void deleteById(Long id) {
		
	}

	@Override
	public long count() {
		return productRepository.count();
	}
}