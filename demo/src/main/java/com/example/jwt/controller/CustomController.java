package com.example.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.entity.Custom;
import com.example.jwt.service.CustomService;

@RestController
@CrossOrigin()
public class CustomController {

	@Autowired
	private CustomService customService;
	
	@PostMapping("/customs")
	public Custom save(@RequestBody Custom custom) {
		return customService.save(custom);
	}
}