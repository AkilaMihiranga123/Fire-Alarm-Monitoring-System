package com.models;

import java.io.Serializable;

public class CreatedFireAlarmSensorDetails implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	//model for store one inserted fire alarm details responses.
	
	private String status;
	private FireAlarmSensor data;
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public FireAlarmSensor getData() {
		return data;
	}
	public void setData(FireAlarmSensor data) {
		this.data = data;
	}
	
	

}
