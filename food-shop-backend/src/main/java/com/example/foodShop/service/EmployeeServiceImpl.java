package com.example.foodShop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.foodShop.entity.Employee;
import com.example.foodShop.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> findAll(int pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber, 10, Sort.by("employeeId"));
		Page<Employee> result = employeeRepository.findAll(pageable);
		return result.toList();
	}

	@Override
	public Employee findById(Long id) {
		Optional<Employee> result = employeeRepository.findById(id);
		return result.get();
	}

	@Override
	public Employee save(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public void deleteById(Long id) {
		employeeRepository.deleteById(id);
	}
	
	@Override
	public long count() {
		return employeeRepository.count();
	}
}