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

import com.example.jwt.entity.Customer;
import com.example.jwt.entity.Role;
import com.example.jwt.entity.User;
import com.example.jwt.service.CustomerService;
import com.example.jwt.service.UserService;

@RestController
@CrossOrigin()
public class CustomerController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/customers")
	public List<Customer> findAll(@RequestParam int pageNumber) {
		return customerService.findAll(pageNumber);
	}
	
	@GetMapping("/customers/id")
	public Customer findById(@RequestParam Long customerId) {
		return customerService.findById(customerId);
	}
	
	@PostMapping("/customers")
	public Customer save(@RequestBody Customer customer) {
		Role role = new Role();
		role.setRoleId(1l);
		User user = new User();
		user.setRole(role);
		user = userService.save(user);
		customer.setUser(user);
		return customerService.save(customer);
	}
	
	@DeleteMapping("/customers")
	public void deleteById(@RequestParam Long id) {
		customerService.deleteById(id);
	}
	
	@GetMapping("/customers/count")
	public long count() {
		return customerService.count();
	}
}