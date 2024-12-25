package com.example.foodShop.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodShop.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, String>, OrderRepositoryCustom {
	public List<Order> findByOrderDate(Date orderDate);
}