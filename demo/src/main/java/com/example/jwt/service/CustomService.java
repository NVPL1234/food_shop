package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.Custom;
import com.example.jwt.entity.CustomPK;

public interface CustomService {
	public List<Custom> findAll();
	public Custom findById(CustomPK id);
	public Custom save(Custom custom);
	public void deleteById(CustomPK id);
	public long count();
}