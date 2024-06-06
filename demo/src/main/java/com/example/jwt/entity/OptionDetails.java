package com.example.jwt.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "option_details")
@IdClass(OptionDetailsPK.class)
public class OptionDetails {
	
	@Id
	@ManyToOne
	@JoinColumn(name = "option_category_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
	private OptionCategory optionCategory;
	
	@Id
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
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
	public OptionDetails(OptionCategory optionCategory, Product product) {
		this.optionCategory = optionCategory;
		this.product = product;
	}
	
	@Override
	public String toString() {
		return "OptionDetails [optionCategory=" + optionCategory + ", product=" + product + "]";
	}
}