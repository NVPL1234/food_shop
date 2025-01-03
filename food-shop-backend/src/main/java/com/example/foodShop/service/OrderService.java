package com.example.foodShop.service;

import java.sql.Date;
import java.util.List;

import com.example.foodShop.entity.Order;
import com.example.foodShop.reponse.ReponseRevenue;

public interface OrderService {
	public List<Order> findBy(String orderDate, Long customerId);
	public List<Order> findByOrderDate(Date orderDate);
	public List<Order> findAll(int pageNumber);
	public Order findById(String id);
	public Order save(Order order);
	public void deleteById(String id);
	public long count();
	public List<ReponseRevenue> getRevenue(int dayNum);
	public List<ReponseRevenue> getRevenue(String firstDay, String lastDay);
}