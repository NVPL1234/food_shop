package com.example.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwt.entity.OrderDetails;
import com.example.jwt.service.OrderDetailsService;

@RestController
@CrossOrigin()
public class OrderDetailsController {

	@Autowired
	private OrderDetailsService orderDetailsService;
	
	@PostMapping("/orderDetails")
	public OrderDetails save(@RequestBody OrderDetails orderDetails) {
		return orderDetailsService.save(orderDetails);
	}
}