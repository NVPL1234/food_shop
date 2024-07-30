package com.example.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.entity.Customer;
import com.example.jwt.service.CustomerService;

@RestController
@CrossOrigin()
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/customers")
	public Customer findById(@RequestParam Long customerId) {
		return customerService.findById(customerId);
	}
}