package com.example.jwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jwt.entity.Product;
import com.example.jwt.entity.ProductCategory;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, ProductRepositoryCustom {
	List<Product> findByProductName(String productName);
	List<Product> findByProductCategory(ProductCategory productCategory);
}