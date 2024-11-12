package com.example.jwt.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.example.jwt.dto.OrderDetailsDTO;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

public class OrderDetailsRepositoryCustomImpl implements OrderDetailsRepositoryCustom {
	
	private EntityManager entityManager;
	
	@Autowired
	public OrderDetailsRepositoryCustomImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<OrderDetailsDTO> findBy(String orderId) {
		Query query = entityManager.createNativeQuery("SELECT OD.order_details_id, P.product_name, OD.quantity, unit_price_product, note, option_name, O.unit_price FROM order_details OD LEFT JOIN customs C ON OD.order_id = C.order_id AND OD.order_details_id = C.order_details_id AND OD.product_id = C.product_id JOIN products P ON OD.product_id = P.product_id LEFT JOIN options O ON C.option_id = O.option_id WHERE OD.order_id = '" + orderId + "' ORDER BY OD.order_details_id", OrderDetailsDTO.class);
		return query.getResultList();
	}
}