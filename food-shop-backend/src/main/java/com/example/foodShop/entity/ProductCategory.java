package com.example.foodShop.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ProductCategories")
public class ProductCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_category_id")
	private Long productCategoryId;

	@Column(name = "product_category_name", columnDefinition = "nvarchar(50)")
	private String productCategoryName;

	public Long getProductCategoryId() {
		return productCategoryId;
	}

	public void setProductCategoryId(Long productCategoryId) {
		this.productCategoryId = productCategoryId;
	}

	public String getProductCategoryName() {
		return productCategoryName;
	}

	public void setProductCategoryName(String productCategoryName) {
		this.productCategoryName = productCategoryName;
	}

	public ProductCategory() {
	}

	public ProductCategory(Long productCategoryId) {
		this.productCategoryId = productCategoryId;
	}

	public ProductCategory(Long productCategoryId, String productCategoryName) {
		this.productCategoryId = productCategoryId;
		this.productCategoryName = productCategoryName;
	}

	@Override
	public String toString() {
		return "ProductCategory [productCategoryId=" + productCategoryId + ", productCategoryName="
				+ productCategoryName + "]";
	}
}