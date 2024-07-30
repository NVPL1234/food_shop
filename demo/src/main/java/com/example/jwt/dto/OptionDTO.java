package com.example.jwt.dto;

public class OptionDTO {

	private boolean chooseMultiple;
	private boolean obligate;
	private String optionCategoryName;
	private Long optionId;
	private String optionName;
	private double unitPrice;
	
	public boolean isChooseMultiple() {
		return chooseMultiple;
	}
	public void setChooseMultiple(boolean chooseMultiple) {
		this.chooseMultiple = chooseMultiple;
	}
	public boolean isObligate() {
		return obligate;
	}
	public void setObligate(boolean obligate) {
		this.obligate = obligate;
	}
	public String getOptionCategoryName() {
		return optionCategoryName;
	}
	public void setOptionCategoryName(String optionCategoryName) {
		this.optionCategoryName = optionCategoryName;
	}
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
	
	public OptionDTO() {
	}
	public OptionDTO(boolean chooseMultiple, boolean obligate, String optionCategoryName, Long optionId,
			String optionName, double unitPrice) {
		this.chooseMultiple = chooseMultiple;
		this.obligate = obligate;
		this.optionCategoryName = optionCategoryName;
		this.optionId = optionId;
		this.optionName = optionName;
		this.unitPrice = unitPrice;
	}
	
	@Override
	public String toString() {
		return "OptionDTO [chooseMultiple=" + chooseMultiple + ", obligate=" + obligate + ", optionCategoryName="
				+ optionCategoryName + ", optionId=" + optionId + ", optionName=" + optionName + ", unitPrice="
				+ unitPrice + "]";
	}
}