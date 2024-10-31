package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.Option;

public interface OptionService {
	public List<Option> findAll(int pageNumber);
	public Option findById(Long id);
	public Option save(Option option);
	public void deleteById(Long id);
	public long count();
}