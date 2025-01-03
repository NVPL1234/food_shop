package com.example.foodShop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.corundumstudio.socketio.SocketIOServer;
import com.example.foodShop.dto.OrderDetailsDTO;
import com.example.foodShop.entity.OrderDetails;
import com.example.foodShop.service.OrderDetailsService;

@RestController
@CrossOrigin()
public class OrderDetailsController {

	@Autowired
	private OrderDetailsService orderDetailsService;
	
	@Autowired
	private SocketIOServer server;
	
	@GetMapping("/orderDetails")
	public List<OrderDetailsDTO> findBy(@RequestParam String orderId) {
		return orderDetailsService.findBy(orderId);
	}
	
	@PostMapping("/orderDetails")
	public OrderDetails save(@RequestBody OrderDetails orderDetails) {
		orderDetails = orderDetailsService.save(orderDetails);
		server.getBroadcastOperations().sendEvent("add", "Add success");	
		return orderDetails;
	}
}