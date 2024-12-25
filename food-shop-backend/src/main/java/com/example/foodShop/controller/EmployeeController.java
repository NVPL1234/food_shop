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

import com.example.foodShop.entity.Employee;
import com.example.foodShop.entity.Role;
import com.example.foodShop.entity.User;
import com.example.foodShop.service.EmployeeService;
import com.example.foodShop.service.UserService;

@RestController
@CrossOrigin()
public class EmployeeController {
	
	@Autowired
	private UserService userService; 

	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@GetMapping("/employees")
	public List<Employee> findAll(@RequestParam int pageNumber) {
		return employeeService.findAll(pageNumber);
	}
	
	@GetMapping("/employees/id")
	public Employee findById(@RequestParam Long id) {
		return employeeService.findById(id);
	}
	
	@PostMapping("/employees")
	public Employee save(@RequestBody Employee employee) {
		if(employee.getEmployeeId() == null) {
			Role role = new Role();
			role.setRoleId(2l);
			User user = new User();
			user.setUsername(employee.getPhoneNumber());
			user.setPassword(passwordEncoder.encode("1234"));
			user.setRole(role);
			user = userService.save(user);
			employee.setUser(user);
		}
		return employeeService.save(employee);
	}
	
	@DeleteMapping("/employees")
	public void deleteById(Long id) {
		employeeService.deleteById(id);
	}
	
	@GetMapping("/employees/count")
	public long count() {
		return employeeService.count();
	}
}