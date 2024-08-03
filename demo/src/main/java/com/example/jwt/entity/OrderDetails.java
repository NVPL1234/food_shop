package com.example.jwt.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_details")
public class OrderDetails {
	
	@EmbeddedId
	private OrderDetailsPK id;

	@OnDelete(action = OnDeleteAction.CASCADE)
	@ManyToOne
	@JoinColumn(name = "order_id", insertable = false, updatable = false)
	private Order order;
	
	@ManyToOne
	@JoinColumn(name = "product_id", insertable = false, updatable = false)
	private Product product;
	
	private int quantity;
	
	@Column(name = "unit_price_product")
	private double unitPriceProduct;
	
	@Column(columnDefinition = "nvarchar(255)")
	private String note;

	public OrderDetailsPK getId() {
		return id;
	}

	public void setId(OrderDetailsPK id) {
		this.id = id;
	}

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

	public double getUnitPriceProduct() {
		return unitPriceProduct;
	}

	public void setUnitPriceProduct(double unitPriceProduct) {
		this.unitPriceProduct = unitPriceProduct;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public OrderDetails() {
	}

	public OrderDetails(OrderDetailsPK id, Order order, Product product, int quantity, double unitPriceProduct,
			String note) {
		this.id = id;
		this.order = order;
		this.product = product;
		this.quantity = quantity;
		this.unitPriceProduct = unitPriceProduct;
		this.note = note;
	}

	@Override
	public String toString() {
		return "OrderDetails [id=" + id + ", order=" + order + ", product=" + product + ", quantity=" + quantity
				+ ", unitPriceProduct=" + unitPriceProduct + ", note=" + note + "]";
	}
}