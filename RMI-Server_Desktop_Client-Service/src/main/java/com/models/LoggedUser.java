package com.models;

import java.io.Serializable;

public class LoggedUser implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	//model for store logged user details responses.
	
	private String status;
	private String msg;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
