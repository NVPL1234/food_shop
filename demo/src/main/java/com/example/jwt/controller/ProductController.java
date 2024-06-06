package com.example.jwt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.dto.OptionDTO;
import com.example.jwt.dto.ProductDTO;
import com.example.jwt.entity.Product;
import com.example.jwt.service.ProductService;

@RestController
@CrossOrigin()
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	public List<Product> findAll(@RequestParam int pageNumber) {
		return productService.findAll(pageNumber);
	}
	
	@GetMapping("/products/count")
	public long count() {
		return productService.count();
	}
	
	@GetMapping("/productAndProductCategoies")
	public List<ProductDTO> getAll() {
		return productService.getAll();
	}
	
	@GetMapping("/products/option")
	public List<OptionDTO> getOptions(@RequestParam Long productId) {
		return productService.getOptions(productId);
	}
}