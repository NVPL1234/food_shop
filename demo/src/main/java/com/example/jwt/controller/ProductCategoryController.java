package com.example.jwt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.entity.ProductCategory;
import com.example.jwt.service.ProductCategoryService;

@RestController
@CrossOrigin()
public class ProductCategoryController {

	@Autowired
	private ProductCategoryService productCategoryService;
	
	@GetMapping("/productCategories")
	public List<ProductCategory> findAll() {
		return productCategoryService.findAll();
	}
	
	@GetMapping("/productCategories/id")
	public ProductCategory findById(@RequestParam Long id) {
		return productCategoryService.findById(id);
	}
	
	@PostMapping("/productCategories")
	public ProductCategory save(@RequestBody ProductCategory productCategory) {
		return productCategoryService.save(productCategory);
	}
	
	@DeleteMapping("/productCategories")
	public void deleteById(@RequestParam Long id) {
		productCategoryService.deleteById(id);
	}
}