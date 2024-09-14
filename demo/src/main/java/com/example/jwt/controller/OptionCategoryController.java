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

import com.example.jwt.entity.OptionCategory;
import com.example.jwt.service.OptionCategoryService;

@RestController
@CrossOrigin()
public class OptionCategoryController {

	@Autowired
	private OptionCategoryService optionCategoryService;
	
	@GetMapping("/optionCategories")
	public List<OptionCategory> findAll() {
		return optionCategoryService.findAll();
	}
	
	@GetMapping("/optionCategories/id")
	public OptionCategory findById(@RequestParam Long id) {
		return optionCategoryService.findById(id);
	}
	
	@PostMapping("/optionCategories")
	public OptionCategory save(@RequestBody OptionCategory optionCategory) {
		return optionCategoryService.save(optionCategory);
	}
	
	@DeleteMapping("/optionCategories")
	public void deleteById(@RequestParam Long id) {
		optionCategoryService.deleteById(id);
	}
}