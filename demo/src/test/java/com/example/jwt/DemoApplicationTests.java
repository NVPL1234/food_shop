package com.example.jwt;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.jwt.repository.ProductRepository;

@SpringBootTest
class DemoApplicationTests {
	
	@Autowired
	ProductRepository productRepository;

	@Test
	void contextLoads() {
	}

}