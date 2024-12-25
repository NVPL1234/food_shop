package com.example.foodShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodShop.entity.OrderDetails;
import com.example.foodShop.entity.OrderDetailsPK;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, OrderDetailsPK>, OrderDetailsRepositoryCustom {

}