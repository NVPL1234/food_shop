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

import com.example.jwt.dto.OptionDTO;
import com.example.jwt.dto.ProductDTO;
import com.example.jwt.entity.Product;
import com.example.jwt.entity.ProductCategory;
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
	
	@GetMapping("/products/id")
	public Product findById(@RequestParam Long id) {
		return productService.findById(id);
	}

	@GetMapping("/products/name")
	public List<Product> findByProductName(@RequestParam String productName) {
		return productService.findByProductName(productName);
	}
	
	@GetMapping("/products/productCategory")
	public List<Product> findByProductCategory(@RequestParam Long productCategoryId) {
		ProductCategory productCategory = new ProductCategory(productCategoryId);
		return productService.findByProductCategory(productCategory);
	}
	
	@GetMapping("/productAndProductCategoies")
	public List<ProductDTO> getAll() {
		return productService.getAll();
	}
	
	@GetMapping("/products/option")
	public List<OptionDTO> getOptions(@RequestParam Long productId) {
		return productService.getOptions(productId);
	}
	
	@PostMapping("/products")
	public Product save(@RequestBody Product product) {
		return productService.save(product);
	}
	
	@DeleteMapping("/products")
	public void deleteById(@RequestParam Long id) {
		productService.deleteById(id);
	}
	
	@GetMapping("/products/count")
	public long count() {
		return productService.count();
	}
}