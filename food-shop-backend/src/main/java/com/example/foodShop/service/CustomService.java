package com.example.foodShop.service;

import java.util.List;

import com.example.foodShop.entity.Custom;
import com.example.foodShop.entity.CustomPK;

public interface CustomService {
	public List<Custom> findAll();
	public Custom findById(CustomPK id);
	public Custom save(Custom custom);
	public void deleteById(CustomPK id);
	public long count();
}