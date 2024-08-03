package com.example.jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jwt.entity.OrderDetails;
import com.example.jwt.entity.OrderDetailsPK;
import com.example.jwt.repository.OrderDetailsRepository;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {

	@Autowired
	private OrderDetailsRepository orderDetailsRepository;
	
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