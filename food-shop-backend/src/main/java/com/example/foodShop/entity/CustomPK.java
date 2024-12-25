package com.example.foodShop.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class CustomPK implements Serializable {
	
	@Column(name = "option_id")
	private Long optionId;
	
	@Column(name = "order_details_id")
	private Long orderDetailsId;
	
	@Column(name = "order_id")
	private String orderId;
	
	@Column(name = "product_id")
	private Long productId;

	public Long getOptionId() {
		return optionId;
	}

	public void setOptionId(Long optionId) {
		this.optionId = optionId;
	}

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
		if(orderId == null)
			this.orderId = "";
		else
			this.orderId = orderId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public CustomPK() {
	}

	@Override
	public int hashCode() {
		return Objects.hash(optionId, orderDetailsId, orderId, productId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CustomPK other = (CustomPK) obj;
		return Objects.equals(optionId, other.optionId) && Objects.equals(orderDetailsId, other.orderDetailsId)
				&& Objects.equals(orderId, other.orderId) && Objects.equals(productId, other.productId);
	}

	@Override
	public String toString() {
		return "CustomPK [optionId=" + optionId + ", orderDetailsId=" + orderDetailsId + ", orderId=" + orderId
				+ ", productId=" + productId + "]";
	}
}