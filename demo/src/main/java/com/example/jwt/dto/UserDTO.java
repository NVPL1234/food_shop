package com.example.jwt.dto;

public class UserDTO {
	
	private Long userId;
	private String token;
	private Long roleId;
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	
	public UserDTO() {
	}
	public UserDTO(Long userId, String token, Long roleId) {
		this.userId = userId;
		this.token = token;
		this.roleId = roleId;
	}
	
	@Override
	public String toString() {
		return "UserDTO [userId=" + userId + ", token=" + token + ", roleId=" + roleId + "]";
	}
}