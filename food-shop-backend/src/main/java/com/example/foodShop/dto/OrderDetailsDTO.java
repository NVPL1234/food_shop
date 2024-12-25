package com.example.foodShop.dto;

public class OrderDetailsDTO {

	private Long orderDetailsId;
	private String productName;
	private int quantity;
	private double unitPriceProduct;
	private String note;
	private String optionName;
	private Double unitPriceOption;
	private Double amount;

	public Long getOrderDetailsId() {
		return orderDetailsId;
	}

	public void setOrderDetailsId(Long orderDetailsId) {
		this.orderDetailsId = orderDetailsId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getUnitPriceProduct() {
		return unitPriceProduct;
	}

	public void setUnitPriceProduct(double unitPriceProduct) {
		this.unitPriceProduct = unitPriceProduct;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getOptionName() {
		return optionName;
	}

	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}

	public Double getUnitPriceOption() {
		return unitPriceOption;
	}

	public void setUnitPriceOption(Double unitPriceOption) {
		this.unitPriceOption = unitPriceOption;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public OrderDetailsDTO() {
	}

	public OrderDetailsDTO(Long orderDetailsId, String productName, int quantity, double unitPriceProduct, String note,
			String optionName, Double unitPriceOption) {
		this.orderDetailsId = orderDetailsId;
		this.productName = productName;
		this.quantity = quantity;
		this.unitPriceProduct = unitPriceProduct;
		this.note = note;
		this.optionName = optionName;
		this.unitPriceOption = unitPriceOption;
	}

	@Override
	public String toString() {
		return "OrderDetailsDTO [orderDetailsId=" + orderDetailsId + ", productName=" + productName + ", quantity="
				+ quantity + ", unitPriceProduct=" + unitPriceProduct + ", note=" + note + ", optionName=" + optionName
				+ ", unitPriceOption=" + unitPriceOption + ", amount=" + amount + "]";
	}
}