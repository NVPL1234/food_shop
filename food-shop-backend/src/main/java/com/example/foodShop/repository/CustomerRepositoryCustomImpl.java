package com.example.foodShop.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

public class CustomerRepositoryCustomImpl implements CustomerRepositoryCustom {

	private EntityManager entityManager;
	
	@Autowired
	public CustomerRepositoryCustomImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public long countNewCustomer() {
		Query query = entityManager.createNativeQuery("SELECT COUNT(*) FROM customers WHERE create_date = CAST(GETDATE() AS DATE)");
		return Long.parseLong(query.getSingleResult().toString());
	}
}