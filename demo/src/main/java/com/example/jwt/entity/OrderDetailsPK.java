package com.example.jwt.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;

@Embeddable
public class OrderDetailsPK implements Serializable {

	private Long order;
	private Long product;

	public OrderDetailsPK() {
	}

	@Override
	public int hashCode() {
		return Objects.hash(order, product);
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
		return Objects.equals(order, other.order) && Objects.equals(product, other.product);
	}
}