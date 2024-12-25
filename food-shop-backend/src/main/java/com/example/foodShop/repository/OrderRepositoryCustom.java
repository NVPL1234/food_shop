package com.example.foodShop.repository;

import java.util.List;

import com.example.foodShop.entity.Order;
import com.example.foodShop.reponse.ReponseRevenue;

public interface OrderRepositoryCustom {
	public List<ReponseRevenue> getRevenue(int dayNum);
	public List<ReponseRevenue> getRevenue(String firstDay, String lastDay);
	public long count();
	public List<Order> findBy(String orderDate, Long customerId);
}