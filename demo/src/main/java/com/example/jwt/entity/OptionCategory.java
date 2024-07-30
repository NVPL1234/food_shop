package com.example.jwt.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "option_categories")
public class OptionCategory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "option_category_id")
	private Long optionCategoryId;
	
	@Column(name = "option_category_name", columnDefinition = "nvarchar(100)")
	private String optionCategoryName;
	
	private boolean obligate;
	
	@Column(name = "choose_multiple")
	private boolean chooseMultiple;

	public Long getOptionCategoryId() {
		return optionCategoryId;
	}

	public void setOptionCategoryId(Long optionCategoryId) {
		this.optionCategoryId = optionCategoryId;
	}

	public String getOptionCategoryName() {
		return optionCategoryName;
	}

	public void setOptionCategoryName(String optionCategoryName) {
		this.optionCategoryName = optionCategoryName;
	}

	public boolean isObligate() {
		return obligate;
	}

	public void setObligate(boolean obligate) {
		this.obligate = obligate;
	}

	public boolean isChooseMultiple() {
		return chooseMultiple;
	}

	public void setChooseMultiple(boolean chooseMultiple) {
		this.chooseMultiple = chooseMultiple;
	}

	public OptionCategory() {
	}

	public OptionCategory(Long optionCategoryId, String optionCategoryName, boolean obligate, boolean chooseMultiple) {
		this.optionCategoryId = optionCategoryId;
		this.optionCategoryName = optionCategoryName;
		this.obligate = obligate;
		this.chooseMultiple = chooseMultiple;
	}

	@Override
	public String toString() {
		return "OptionCategory [optionCategoryId=" + optionCategoryId + ", optionCategoryName=" + optionCategoryName
				+ ", obligate=" + obligate + ", chooseMultiple=" + chooseMultiple + "]";
	}
}