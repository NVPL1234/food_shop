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
import com.example.jwt.entity.OptionDetails;
import com.example.jwt.service.OptionDetailsService;

@RestController
@CrossOrigin()
public class OptionDetailsController {

	@Autowired
	private OptionDetailsService optionDetailsService;
	
	@GetMapping("/optionDetails")
	public List<OptionDetails> findByOptionCategory(@RequestParam Long optionCategoryId) {
		OptionCategory optionCategory = new OptionCategory();
		optionCategory.setOptionCategoryId(optionCategoryId);
		return optionDetailsService.findByOptionCategory(optionCategory);
	}
	
	@PostMapping("/optionDetails")
	public OptionDetails save(@RequestBody OptionDetails optionDetails) {
		return optionDetailsService.save(optionDetails);
	}
	
	@DeleteMapping("/optionDetails")
	public void deleteBy(@RequestParam Long optionCategoryId) {
		optionDetailsService.deleteBy(optionCategoryId);
	}
}