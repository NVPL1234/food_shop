package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.Employee;

public interface EmployeeService {
	public List<Employee> findAll();
	public Employee findById(Long id);
	public Employee save(Employee employee);
	public void deleteById(Long id);
}