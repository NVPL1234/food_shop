package com.example.jwt.entity;

import java.io.Serializable;
import java.util.Objects;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Embeddable
public class OrderDetailsPK implements Serializable {

	@Column(name = "order_details_id")
	private Long orderDetails;
	
	@Column(name = "order_id")
	private String order;
	
	@Column(name = "product_id")
	private Long product;
	
	public Long getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(Long orderDetails) {
		this.orderDetails = orderDetails;
	}

	public String getOrder() {
		return order;
	}

	public void setOrder(String order) {
		this.order = order;
	}

	public Long getProduct() {
		return product;
	}

	public void setProduct(Long product) {
		this.product = product;
	}

	public OrderDetailsPK() {
	}

	@Override
	public int hashCode() {
		return Objects.hash(order, orderDetails, product);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OrderDetailsPK other = (OrderDetailsPK) obj;
		return Objects.equals(order, other.order) && Objects.equals(orderDetails, other.orderDetails)
				&& Objects.equals(product, other.product);
	}

	@Override
	public String toString() {
		return "OrderDetailsPK [orderDetails=" + orderDetails + ", order=" + order + ", product=" + product + "]";
	}
}