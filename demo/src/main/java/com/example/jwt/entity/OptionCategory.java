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
	
	@Column(name = "is_obligate")
	private boolean isObligate;
	
	@Column(name = "is_choose_multiple")
	private boolean isChooseMultiple;
	
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
		return isObligate;
	}
	public void setObligate(boolean isObligate) {
		this.isObligate = isObligate;
	}
	public boolean isChooseMultiple() {
		return isChooseMultiple;
	}
	public void setChooseMultiple(boolean isChooseMultiple) {
		this.isChooseMultiple = isChooseMultiple;
	}
	
	public OptionCategory() {
	}
	public OptionCategory(Long optionCategoryId, String optionCategoryName, boolean isObligate,
			boolean isChooseMultiple) {
		this.optionCategoryId = optionCategoryId;
		this.optionCategoryName = optionCategoryName;
		this.isObligate = isObligate;
		this.isChooseMultiple = isChooseMultiple;
	}
	
	@Override
	public String toString() {
		return "OptionCategory [optionCategoryId=" + optionCategoryId + ", optionCategoryName=" + optionCategoryName
				+ ", isObligate=" + isObligate + ", isChooseMultiple=" + isChooseMultiple + "]";
	}
}