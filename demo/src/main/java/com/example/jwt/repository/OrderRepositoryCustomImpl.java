package com.example.jwt.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.example.jwt.entity.Order;
import com.example.jwt.reponse.ReponseRevenue;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

public class OrderRepositoryCustomImpl implements OrderRepositoryCustom {
	
	private EntityManager entityManager;
	
	@Autowired
	public OrderRepositoryCustomImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<ReponseRevenue> getRevenue(int dayNum) {
		if(dayNum == 0) {
			Query query = entityManager.createNativeQuery("SELECT order_date, SUM(quantity * (unit_price_product + ISNULL(total_option, 0))) AS revenue FROM (SELECT O.order_id, order_date, OD.product_id, quantity, unit_price_product, SUM(unit_price) AS total_option FROM orders O JOIN order_details OD ON O.order_id = OD.order_id LEFT JOIN customs C ON OD.order_id = C.order_id AND OD.order_details_id = C.order_details_id AND OD.product_id = C.product_id WHERE order_date = CAST(GETDATE() AS DATE) GROUP BY O.order_id, order_date, OD.product_id, quantity, unit_price_product, OD.order_details_id ) O GROUP BY order_date ORDER BY order_date", ReponseRevenue.class);
			return query.getResultList();
		}
		else if(dayNum == 30) {
			Query query = entityManager.createNativeQuery("SELECT order_date, SUM(quantity * (unit_price_product + ISNULL(total_option, 0))) AS revenue FROM (SELECT O.order_id, order_date, OD.product_id, quantity, unit_price_product, SUM(unit_price) AS total_option FROM orders O JOIN order_details OD ON O.order_id = OD.order_id LEFT JOIN customs C ON OD.order_id = C.order_id AND OD.order_details_id = C.order_details_id AND OD.product_id = C.product_id WHERE order_date BETWEEN CAST(GETDATE() - 30 AS DATE) AND CAST(GETDATE() AS DATE) GROUP BY O.order_id, order_date, OD.product_id, quantity, unit_price_product, OD.order_details_id ) O GROUP BY order_date ORDER BY order_date", ReponseRevenue.class);
			return query.getResultList();
		}
		return null;
	}

	@Override
	@Transactional
	public List<ReponseRevenue> getRevenue(String firstDay, String lastDay) {
		Query query = entityManager.createNativeQuery("SELECT order_date, SUM(quantity * (unit_price_product + ISNULL(total_option, 0))) AS revenue FROM (SELECT O.order_id, order_date, OD.product_id, quantity, unit_price_product, SUM(unit_price) AS total_option FROM orders O JOIN order_details OD ON O.order_id = OD.order_id LEFT JOIN customs C ON OD.order_id = C.order_id AND OD.order_details_id = C.order_details_id AND OD.product_id = C.product_id WHERE order_date BETWEEN '" + firstDay + "' AND '" + lastDay + "' GROUP BY O.order_id, order_date, OD.product_id, quantity, unit_price_product, OD.order_details_id ) O GROUP BY order_date ORDER BY order_date", ReponseRevenue.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public long count() {
		Query query = entityManager.createNativeQuery("SELECT COUNT(*) FROM orders WHERE order_date = CAST(GETDATE() AS DATE)");
		return Long.parseLong(query.getSingleResult().toString());
	}

	@Override
	@Transactional
	public List<Order> findBy(String orderDate, Long customerId) {
		Query query = entityManager.createNativeQuery("SELECT * FROM orders WHERE order_date = '" + orderDate + "' AND customer_id = " + customerId, Order.class);
		return query.getResultList();
	}
}