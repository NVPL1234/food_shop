package com.example.foodShop.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class OptionDetailsPK implements Serializable {
	
	@Column(name = "option_category_id")
	private Long optionCategoryId;
	
	@Column(name = "product_id")
	private Long productId;
	
	public Long getOptionCategoryId() {
		return optionCategoryId;
	}

	public void setOptionCategoryId(Long optionCategoryId) {
		this.optionCategoryId = optionCategoryId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public OptionDetailsPK() {
	}

	@Override
	public int hashCode() {
		return Objects.hash(optionCategoryId, productId);
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
		return Objects.equals(optionCategoryId, other.optionCategoryId) && Objects.equals(productId, other.productId);
	}
}