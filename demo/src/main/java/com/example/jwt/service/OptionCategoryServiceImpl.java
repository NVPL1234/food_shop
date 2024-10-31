package com.example.jwt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.OptionCategory;
import com.example.jwt.repository.OptionCategoryRepository;

@Service
public class OptionCategoryServiceImpl implements OptionCategoryService {

	@Autowired
	private OptionCategoryRepository optionCategoryRepository;
	
	@Override
	public List<OptionCategory> findAll() {
		return optionCategoryRepository.findAll();
	}
	
	@Override
	public List<OptionCategory> findAll(int pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber, 10, Sort.by("optionCategoryId"));
		Page<OptionCategory> result = optionCategoryRepository.findAll(pageable);
		return result.toList();
	}

	@Override
	public OptionCategory findById(Long id) {
		Optional<OptionCategory> result = optionCategoryRepository.findById(id);
		return result.get();
	}

	@Override
	public OptionCategory save(OptionCategory optionCategory) {
		return optionCategoryRepository.save(optionCategory);
	}

	@Override
	public void deleteById(Long id) {
		optionCategoryRepository.deleteById(id);
	}
	
	@Override
	public long count() {
		return optionCategoryRepository.count();
	}
}