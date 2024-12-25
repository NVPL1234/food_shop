package com.example.foodShop.service;

import java.util.List;

import com.example.foodShop.dto.OrderDetailsDTO;
import com.example.foodShop.entity.OrderDetails;
import com.example.foodShop.entity.OrderDetailsPK;

public interface OrderDetailsService {
	public List<OrderDetailsDTO> findBy(String orderId);
	public List<OrderDetails> findAll();
	public OrderDetails findById(OrderDetailsPK id);
	public OrderDetails save(OrderDetails orderDetails);
	public void deleteById(OrderDetailsPK id);
}