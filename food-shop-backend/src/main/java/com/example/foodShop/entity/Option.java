package com.example.foodShop.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "options")
public class Option {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "option_id")
	private Long optionId;
	
	@Column(name = "option_name", columnDefinition = "nvarchar(100)")
	private String optionName;
	
	@Column(name = "unit_price")
	private double unitPrice;
	
	@ManyToOne
	@JoinColumn(name = "option_category_id")
	private OptionCategory optionCategory;
	
	public Long getOptionId() {
		return optionId;
	}
	public void setOptionId(Long optionId) {
		this.optionId = optionId;
	}
	public String getOptionName() {
		return optionName;
	}
	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}
	public double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}
	public OptionCategory getOptionCategory() {
		return optionCategory;
	}
	public void setOptionCategory(OptionCategory optionCategory) {
		this.optionCategory = optionCategory;
	}
	
	public Option() {
	}
	public Option(Long optionId, String optionName, double unitPrice, OptionCategory optionCategory) {
		this.optionId = optionId;
		this.optionName = optionName;
		this.unitPrice = unitPrice;
		this.optionCategory = optionCategory;
	}
	
	@Override
	public String toString() {
		return "Option [optionId=" + optionId + ", optionName=" + optionName + ", unitPrice=" + unitPrice
				+ ", optionCategory=" + optionCategory + "]";
	}
}