package com.example.jwt.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_details")
public class OrderDetails {
	
	@EmbeddedId
	private OrderDetailsPK id;

	@OnDelete(action = OnDeleteAction.CASCADE)
	@ManyToOne
	@MapsId("order")
	@JoinColumn(name = "order_id")
	private Order order;
	
	@ManyToOne
	@MapsId("product")
	@JoinColumn(name = "product_id")
	private Product product;
	
	@ManyToOne
	@JoinColumn(name = "option_id")
	private Option option;
	
	private int quantity;
	
	@Column(name = "unit_price_product")
	private double unitPriceProduct;
	
	@Column(name = "unit_price_option")
	private double unitPriceOption;
	
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

	public Option getOption() {
		return option;
	}

	public void setOption(Option option) {
		this.option = option;
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

	public double getUnitPriceOption() {
		return unitPriceOption;
	}

	public void setUnitPriceOption(double unitPriceOption) {
		this.unitPriceOption = unitPriceOption;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public OrderDetails() {
	}

	public OrderDetails(OrderDetailsPK id, Order order, Product product, Option option, int quantity,
			double unitPriceProduct, double unitPriceOption, String note) {
		this.id = id;
		this.order = order;
		this.product = product;
		this.option = option;
		this.quantity = quantity;
		this.unitPriceProduct = unitPriceProduct;
		this.unitPriceOption = unitPriceOption;
		this.note = note;
	}

	@Override
	public String toString() {
		return "OrderDetails [id=" + id + ", order=" + order + ", product=" + product + ", option=" + option
				+ ", quantity=" + quantity + ", unitPriceProduct=" + unitPriceProduct + ", unitPriceOption="
				+ unitPriceOption + ", note=" + note + "]";
	}
}