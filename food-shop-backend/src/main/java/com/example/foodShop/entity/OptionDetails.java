package com.example.foodShop.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "option_details")
public class OptionDetails {
	
	@EmbeddedId
	private OptionDetailsPK id;
	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@ManyToOne
	@JoinColumn(name = "option_category_id", insertable = false, updatable = false)
	private OptionCategory optionCategory;
	
	@ManyToOne
	@JoinColumn(name = "product_id", insertable = false, updatable = false)
	private Product product;

	public OptionDetailsPK getId() {
		return id;
	}

	public void setId(OptionDetailsPK id) {
		this.id = id;
	}

	public OptionCategory getOptionCategory() {
		return optionCategory;
	}

	public void setOptionCategory(OptionCategory optionCategory) {
		this.optionCategory = optionCategory;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public OptionDetails() {
	}

	public OptionDetails(OptionDetailsPK id, OptionCategory optionCategory, Product product) {
		this.id = id;
		this.optionCategory = optionCategory;
		this.product = product;
	}

	@Override
	public String toString() {
		return "OptionDetails [id=" + id + ", optionCategory=" + optionCategory + ", product=" + product + "]";
	}
}