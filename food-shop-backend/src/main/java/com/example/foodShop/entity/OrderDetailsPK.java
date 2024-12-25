package com.example.foodShop.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class OrderDetailsPK implements Serializable {

	@Column(name = "order_details_id")
	private Long orderDetailsId;
	
	@Column(name = "order_id")
	private String orderId;
	
	@Column(name = "product_id")
	private Long productId;

	public Long getOrderDetailsId() {
		return orderDetailsId;
	}

	public void setOrderDetailsId(Long orderDetailsId) {
		this.orderDetailsId = orderDetailsId;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public OrderDetailsPK() {
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(orderDetailsId, orderId, productId);
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
		return Objects.equals(orderDetailsId, other.orderDetailsId) && Objects.equals(orderId, other.orderId)
				&& Objects.equals(productId, other.productId);
	}

	@Override
	public String toString() {
		return "OrderDetailsPK [orderDetailsId=" + orderDetailsId + ", orderId=" + orderId + ", productId=" + productId
				+ "]";
	}
}