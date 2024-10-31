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

import com.example.jwt.entity.Employee;
import com.example.jwt.entity.Role;
import com.example.jwt.entity.User;
import com.example.jwt.service.EmployeeService;
import com.example.jwt.service.UserService;

@RestController
@CrossOrigin()
public class EmployeeController {
	
	@Autowired
	private UserService userService; 

	@Autowired
	private EmployeeService employeeService;
	
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
		Role role = new Role();
		role.setRoleId(2l);
		User user = new User();
		user.setRole(role);
		user = userService.save(user);
		employee.setUser(user);
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