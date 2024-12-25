package com.example.foodShop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodShop.entity.Custom;
import com.example.foodShop.entity.CustomPK;
import com.example.foodShop.service.CustomService;

@RestController
@CrossOrigin()
public class CustomController {

	@Autowired
	private CustomService customService;
	
	@GetMapping("/customs")
	public List<Custom> findAll() {
		return customService.findAll();
	}
	
	@GetMapping("/customs/id")
	public Custom findById(@RequestParam CustomPK id) {
		return customService.findById(id);
	}
	
	@PostMapping("/customs")
	public Custom save(@RequestBody Custom custom) {
		return customService.save(custom);
	}
	
	@DeleteMapping("/customs")
	public void deleteById(@RequestParam CustomPK id) {
		customService.deleteById(id);
	}
}