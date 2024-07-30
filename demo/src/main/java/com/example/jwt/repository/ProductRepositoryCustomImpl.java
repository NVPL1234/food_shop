package com.example.jwt.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.example.jwt.dto.OptionDTO;
import com.example.jwt.dto.ProductDTO;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

public class ProductRepositoryCustomImpl implements ProductRepositoryCustom {

	private EntityManager entityManager;
	
	@Autowired
	public ProductRepositoryCustomImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public List<ProductDTO> getAll() {
		Query query = entityManager.createNativeQuery("SELECT product_id, img_path, product_name, unit_price, unit, product_category_name FROM product_categories PC JOIN products P ON PC.product_category_id = P.product_category_id ORDER BY PC.product_category_id", ProductDTO.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public List<OptionDTO> getOptions(Long productId) {
		Query query = entityManager.createNativeQuery("SELECT choose_multiple, obligate, option_category_name, option_id, option_name, unit_price FROM option_details OD JOIN option_categories OC ON OD.option_category_id = OC.option_category_id JOIN options O ON OC.option_category_id = O.option_category_id WHERE OD.product_id = " + productId, OptionDTO.class);
		return query.getResultList();
	}
}