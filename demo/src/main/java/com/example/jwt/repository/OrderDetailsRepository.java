package com.example.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jwt.entity.OrderDetails;
import com.example.jwt.entity.OrderDetailsPK;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, OrderDetailsPK>, OrderDetailsRepositoryCustom {

}