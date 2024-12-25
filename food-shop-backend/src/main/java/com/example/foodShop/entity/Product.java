package com.example.foodShop.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Long productId;
	
	@Column(name = "img_path", columnDefinition = "nvarchar(255)")
	private String imgPath;
	
	@Column(name = "product_name", columnDefinition = "nvarchar(50)")
	private String productName;
	
	private int quantity;
	
	@Column(name = "unit_price")
	private double unitPrice;
	
	@Column(columnDefinition = "nvarchar(50)")
	private String unit;
	
	@ManyToOne
	@JoinColumn(name = "product_category_id")
	private ProductCategory productCategory;

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public ProductCategory getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(ProductCategory productCategory) {
		this.productCategory = productCategory;
	}

	public Product() {
	}

	public Product(Long productId, String imgPath, String productName, int quantity, double unitPrice, String unit,
			ProductCategory productCategory) {
		this.productId = productId;
		this.imgPath = imgPath;
		this.productName = productName;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
		this.unit = unit;
		this.productCategory = productCategory;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", imgPath=" + imgPath + ", productName=" + productName
				+ ", quantity=" + quantity + ", unitPrice=" + unitPrice + ", unit=" + unit + ", productCategory="
				+ productCategory + "]";
	}
}