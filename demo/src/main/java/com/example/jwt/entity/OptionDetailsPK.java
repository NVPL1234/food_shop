package com.example.jwt.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;

@Embeddable
public class OptionDetailsPK implements Serializable {

	private Long optionCategory;
	private Long product;
	
	public OptionDetailsPK() {
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(optionCategory, product);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OptionDetailsPK other = (OptionDetailsPK) obj;
		return Objects.equals(optionCategory, other.optionCategory) && Objects.equals(product, other.product);
	}
}