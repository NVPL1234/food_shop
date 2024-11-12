package com.example.jwt.repository;

import java.util.List;

import com.example.jwt.dto.OrderDetailsDTO;

public interface OrderDetailsRepositoryCustom {
	public List<OrderDetailsDTO> findBy(String orderId); 
}