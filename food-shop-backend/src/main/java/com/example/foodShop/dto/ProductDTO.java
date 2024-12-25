package com.example.foodShop.dto;

public class ProductDTO {
	
	private Long productId;
	private String imgPath;
	private String productName;
	private double unitPrice;
	private String unit;
	private String productCategoryName;
	
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getProductCategoryName() {
		return productCategoryName;
	}
	public void setProductCategoryName(String productCategoryName) {
		this.productCategoryName = productCategoryName;
	}
	
	public ProductDTO() {
	}
	public ProductDTO(Long productId, String imgPath, String productName, double unitPrice, String unit,
			String productCategoryName) {
		this.productId = productId;
		this.imgPath = imgPath;
		this.productName = productName;
		this.unitPrice = unitPrice;
		this.unit = unit;
		this.productCategoryName = productCategoryName;
	}
	
	@Override
	public String toString() {
		return "ProductDTO [productId=" + productId + ", imgPath=" + imgPath + ", productName=" + productName
				+ ", unitPrice=" + unitPrice + ", unit=" + unit + ", productCategoryName=" + productCategoryName + "]";
	}
}