package com.example.foodShop.reponse;

import java.sql.Date;

public class ReponseRevenue {
	
	private Date orderDate;
	private Double revenue;
	
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	public Double getRevenue() {
		return revenue;
	}
	public void setRevenue(Double revenue) {
		this.revenue = revenue;
	}
	
	public ReponseRevenue() {
	}
	public ReponseRevenue(Date orderDate, Double revenue) {
		this.orderDate = orderDate;
		this.revenue = revenue;
	}
	
	@Override
	public String toString() {
		return "ReponseRevenue [orderDate=" + orderDate + ", revenue=" + revenue + "]";
	}
}