package com.example.foodShop.service;

import java.util.List;

import com.example.foodShop.entity.Customer;

public interface CustomerService {
	public List<Customer> findAll(int pageNumber);
	public Customer findById(Long id);
	public Customer save(Customer customer);
	public void deleteById(Long id);
	public long count();
	public long countNewCustomer();
}