package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.Customer;

public interface CustomerService {
	public List<Customer> findAll();
	public Customer findById(Long id);
	public Customer save(Customer customer);
	public void deleteById(Long id);
}