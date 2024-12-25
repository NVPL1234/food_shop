package com.example.foodShop.service;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.foodShop.controller.PaymentController;
import com.example.foodShop.entity.Order;
import com.example.foodShop.reponse.ReponseRevenue;
import com.example.foodShop.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Override
	public List<Order> findBy(String orderDate, Long customerId) {
		return orderRepository.findBy(orderDate, customerId);
	}
	
	@Override
	public List<Order> findByOrderDate(Date orderDate) {
		return orderRepository.findByOrderDate(orderDate);
	}
	
	@Override
	public List<Order> findAll(int pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber, 10, Sort.by("orderId"));
		Page<Order> result = orderRepository.findAll(pageable);
		return result.toList();
	}

	@Override
	public Order findById(String id) {
		return null;
	}

	@Override
	public Order save(Order order) {
		if(order.getOrderId() == null) {
			String orderId = PaymentController.getCurrentTimeString("yyMMdd") + "_" + UUID.randomUUID();
			order.setOrderId(orderId);
		}
		return orderRepository.save(order);
	}

	@Override
	public void deleteById(String id) {
	}
	
	@Override
	public long count() {
		return orderRepository.count();
	}

	@Override
	public List<ReponseRevenue> getRevenue(int dayNum) {
		return orderRepository.getRevenue(dayNum);
	}

	@Override
	public List<ReponseRevenue> getRevenue(String firstDay, String lastDay) {
		return orderRepository.getRevenue(firstDay, lastDay);
	}
}