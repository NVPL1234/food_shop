package com.example.jwt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.Option;
import com.example.jwt.repository.OptionRepository;

@Service
public class OptionServiceImpl implements OptionService {
	
	@Autowired
	private OptionRepository optionRepository;

	@Override
	public List<Option> findAll(int pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber, 10, Sort.by("optionId"));
		Page<Option> result = optionRepository.findAll(pageable);
		return result.toList();
	}

	@Override
	public Option findById(Long id) {
		Optional<Option> result = optionRepository.findById(id);
		return result.get();
	}

	@Override
	public Option save(Option option) {
		return optionRepository.save(option);
	}

	@Override
	public void deleteById(Long id) {
		optionRepository.deleteById(id);
	}
	
	@Override
	public long count() {
		return optionRepository.count();
	}
}