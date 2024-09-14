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
import com.example.jwt.service.EmployeeService;

@RestController
@CrossOrigin()
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/employees")
	public List<Employee> findAll() {
		return employeeService.findAll();
	}
	
	@GetMapping("/employees/id")
	public Employee findById(@RequestParam Long id) {
		return employeeService.findById(id);
	}
	
	@PostMapping("/employees")
	public Employee save(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}
	
	@DeleteMapping("/employees")
	public void deleteById(Long id) {
		employeeService.deleteById(id);
	}
}