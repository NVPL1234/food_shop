package com.example.foodShop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foodShop.dto.OrderDetailsDTO;
import com.example.foodShop.entity.OrderDetails;
import com.example.foodShop.entity.OrderDetailsPK;
import com.example.foodShop.repository.OrderDetailsRepository;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {

	@Autowired
	private OrderDetailsRepository orderDetailsRepository;
	
	@Override
	public List<OrderDetailsDTO> findBy(String orderId) {
		return orderDetailsRepository.findBy(orderId);
	}
	
	@Override
	public List<OrderDetails> findAll() {
		return null;
	}

	@Override
	public OrderDetails findById(OrderDetailsPK id) {
		return null;
	}

	@Override
	public OrderDetails save(OrderDetails orderDetails) {
		return orderDetailsRepository.save(orderDetails);
	}

	@Override
	public void deleteById(OrderDetailsPK id) {
	}
}