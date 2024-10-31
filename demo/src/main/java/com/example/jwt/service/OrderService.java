package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.Order;

public interface OrderService {
	public List<Order> findAll(int pageNumber);
	public Order findById(String id);
	public Order save(Order order);
	public void deleteById(String id);
	public long count();
}