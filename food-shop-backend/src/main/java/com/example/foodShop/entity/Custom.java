package com.example.foodShop.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "customs")
public class Custom {

	@EmbeddedId
	private CustomPK id;
	
	@ManyToOne
	@JoinColumn(name = "option_id", insertable = false, updatable = false)
	private Option option;
	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name = "order_details_id", referencedColumnName = "order_details_id", insertable = false, updatable = false),
		@JoinColumn(name = "order_id", referencedColumnName = "order_id", insertable = false, updatable = false),
		@JoinColumn(name = "product_id", referencedColumnName = "product_id", insertable = false, updatable = false)
	})
	private OrderDetails orderDetails;

	@Column(name = "unit_price")
	private double unitPrice;

	public CustomPK getId() {
		return id;
	}

	public void setId(CustomPK id) {
		this.id = id;
	}

	public Option getOption() {
		return option;
	}

	public void setOption(Option option) {
		this.option = option;
	}

	public OrderDetails getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(OrderDetails orderDetails) {
		this.orderDetails = orderDetails;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Custom() {
	}

	public Custom(CustomPK id, Option option, OrderDetails orderDetails, double unitPrice) {
		this.id = id;
		this.option = option;
		this.orderDetails = orderDetails;
		this.unitPrice = unitPrice;
	}

	@Override
	public String toString() {
		return "Custom [id=" + id + ", option=" + option + ", orderDetails=" + orderDetails + ", unitPrice=" + unitPrice
				+ "]";
	}
}