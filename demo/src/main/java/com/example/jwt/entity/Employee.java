package com.example.jwt.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@Column(name = "employee_id")
	private Long employeeId;

	@Column(name = "employee_name", columnDefinition = "nvarchar(50)")
	private String employeeName;

	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(columnDefinition = "nvarchar(255)")
	private String address;

	@Column(name = "id_card_number")
	private String idCardNumber;

	@OneToOne
	@MapsId
	@JoinColumn(name = "employee_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
	private User user;

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getIdCardNumber() {
		return idCardNumber;
	}

	public void setIdCardNumber(String idCardNumber) {
		this.idCardNumber = idCardNumber;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Employee() {
	}

	public Employee(Long employeeId, String employeeName, String phoneNumber, String address, String idCardNumber,
			User user) {
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.idCardNumber = idCardNumber;
		this.user = user;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", employeeName=" + employeeName + ", phoneNumber=" + phoneNumber
				+ ", address=" + address + ", idCardNumber=" + idCardNumber + ", user=" + user + "]";
	}
}