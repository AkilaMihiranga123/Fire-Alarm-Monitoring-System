package com.models;

import java.io.Serializable;

public class RegisteredUser implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	//model for store registered user details responses.
	
	private String status;
	private User data;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getData() {
		return data;
	}

	public void setData(User data) {
		this.data = data;
	}

}
