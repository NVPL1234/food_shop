package com.example.foodShop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodShop.entity.Customer;
import com.example.foodShop.entity.Role;
import com.example.foodShop.entity.User;
import com.example.foodShop.service.CustomerService;
import com.example.foodShop.service.UserService;

@RestController
@CrossOrigin()
public class CustomerController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
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
		if(customer.getCustomerId() == null) {
			Role role = new Role();
			role.setRoleId(1l);
			User user = new User();
			user.setUsername(customer.getPhoneNumber());
			user.setPassword(passwordEncoder.encode("1234"));
			user.setRole(role);
			user = userService.save(user);
			customer.setUser(user);
		}
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
	
	@GetMapping("/customers/countNewCustomer")
	public long countNewCustomer() {
		return customerService.countNewCustomer();
	}
}