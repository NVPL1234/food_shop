package com.example.jwt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.Customer;
import com.example.jwt.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public List<Customer> findAll() {
		return null;
	}

	@Override
	public Customer findById(Long id) {
		Optional<Customer> result = customerRepository.findById(id);
		return result.get();
	}

	@Override
	public Customer save(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public void deleteById(Long id) {

	}
}