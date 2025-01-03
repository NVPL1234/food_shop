package com.example.foodShop.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.corundumstudio.socketio.SocketIOServer;
import com.example.foodShop.entity.Order;
import com.example.foodShop.reponse.ReponseRevenue;
import com.example.foodShop.service.OrderService;

@RestController
@CrossOrigin()
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private SocketIOServer server;
	
	@GetMapping("/orders/customer")
	public List<Order> findBy(@RequestParam String orderDate, @RequestParam Long customerId) {
		return orderService.findBy(orderDate, customerId);
	}
	
	@GetMapping("/orders/date")
	public List<Order> findByOrderDate(@RequestParam Date orderDate) {
		return orderService.findByOrderDate(orderDate);
	}
	
	@PostMapping("/orders")
	public Order save(@RequestBody Order order) {
		if(order.getOrderId() != null) {
			order = orderService.save(order);
			server.getBroadcastOperations().sendEvent("update", "Update success");	
			return order;
		}
		else {
			order = orderService.save(order);		
			return order;
		}
	}
	
	@GetMapping("/orders/revenue")
	public List<ReponseRevenue> getRevenue(@RequestParam int dayNum) {
		return orderService.getRevenue(dayNum);
	}
	
	@GetMapping("/orders/cus_revenue")
	public List<ReponseRevenue> getRevenue(@RequestParam String firstDay, @RequestParam String lastDay) {
		return orderService.getRevenue(firstDay, lastDay);
	}
	
	@GetMapping("/orders/count")
	public long count() {
		return orderService.count();
	}
}