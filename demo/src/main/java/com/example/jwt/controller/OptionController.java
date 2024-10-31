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

import com.example.jwt.entity.Option;
import com.example.jwt.service.OptionService;

@RestController
@CrossOrigin()
public class OptionController {

	@Autowired
	private OptionService optionService;
	
	@GetMapping("/options")
	public List<Option> findAll(@RequestParam int pageNumber) {
		return optionService.findAll(pageNumber);
	}
	
	@GetMapping("/options/id")
	public Option findById(@RequestParam Long id) {
		return optionService.findById(id);
	}
	
	@PostMapping("/options")
	public Option save(@RequestBody Option option) {
		return optionService.save(option);
	}
	
	@DeleteMapping("/options")
	public void deleteById(@RequestParam Long id) {
		optionService.deleteById(id);
	}
	
	@GetMapping("/options/count")
	public long count() {
		return optionService.count();
	}
}