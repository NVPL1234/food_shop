package com.example.jwt.service;

import java.util.List;

import com.example.jwt.entity.OrderDetails;
import com.example.jwt.entity.OrderDetailsPK;

public interface OrderDetailsService {
	public List<OrderDetails> findAll();
	public OrderDetails findById(OrderDetailsPK id);
	public OrderDetails save(OrderDetails orderDetails);
	public void deleteById(OrderDetailsPK id);
}