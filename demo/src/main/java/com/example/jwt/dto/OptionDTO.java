package com.example.jwt.dto;

public class OptionDTO {

	private boolean isChooseMultiple;
	private boolean isObligate;
	private String optionCategoryName;
	private String optionName;
	private double unitPrice;
	
	public boolean isChooseMultiple() {
		return isChooseMultiple;
	}
	public void setChooseMultiple(boolean isChooseMultiple) {
		this.isChooseMultiple = isChooseMultiple;
	}
	public boolean isObligate() {
		return isObligate;
	}
	public void setObligate(boolean isObligate) {
		this.isObligate = isObligate;
	}
	public String getOptionCategoryName() {
		return optionCategoryName;
	}
	public void setOptionCategoryName(String optionCategoryName) {
		this.optionCategoryName = optionCategoryName;
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
	public OptionDTO(boolean isChooseMultiple, boolean isObligate, String optionCategoryName, String optionName,
			double unitPrice) {
		this.isChooseMultiple = isChooseMultiple;
		this.isObligate = isObligate;
		this.optionCategoryName = optionCategoryName;
		this.optionName = optionName;
		this.unitPrice = unitPrice;
	}
	
	@Override
	public String toString() {
		return "OptionDTO [isChooseMultiple=" + isChooseMultiple + ", isObligate=" + isObligate
				+ ", optionCategoryName=" + optionCategoryName + ", optionName=" + optionName + ", unitPrice="
				+ unitPrice + "]";
	}
}