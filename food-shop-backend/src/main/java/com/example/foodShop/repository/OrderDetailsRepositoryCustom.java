package com.example.foodShop.repository;

import java.util.List;

import com.example.foodShop.dto.OrderDetailsDTO;

public interface OrderDetailsRepositoryCustom {
	public List<OrderDetailsDTO> findBy(String orderId); 
}