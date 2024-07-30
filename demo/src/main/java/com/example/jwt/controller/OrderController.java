package com.example.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.entity.Order;
import com.example.jwt.service.OrderService;

@RestController
@CrossOrigin()
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@PostMapping("/orders")
	public Order save(@RequestBody Order order) {
		return orderService.save(order);
	}
}