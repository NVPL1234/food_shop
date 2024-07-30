package com.example.jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.Order;
import com.example.jwt.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public List<Order> findAll() {
		return null;
	}

	@Override
	public Order findById(String id) {
		return null;
	}

	@Override
	public Order save(Order order) {
		return orderRepository.save(order);
	}

	@Override
	public void deleteById(String id) {
	}
}