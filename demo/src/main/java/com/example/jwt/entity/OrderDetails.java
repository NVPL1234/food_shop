package com.example.jwt.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_details")
@IdClass(OrderDetailsPK.class)
public class OrderDetails {

	@Id
	@ManyToOne
	@JoinColumn(name = "order_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Order order;
	
	@Id
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
	private int quantity;
	
	@Column(name = "unit_price")
	private double unitPrice;

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
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

	public OrderDetails() {
	}

	public OrderDetails(Order order, Product product, int quantity, double unitPrice) {
		this.order = order;
		this.product = product;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
	}

	@Override
	public String toString() {
		return "OrderDetails [order=" + order + ", product=" + product + ", quantity=" + quantity + ", unitPrice="
				+ unitPrice + "]";
	}
}