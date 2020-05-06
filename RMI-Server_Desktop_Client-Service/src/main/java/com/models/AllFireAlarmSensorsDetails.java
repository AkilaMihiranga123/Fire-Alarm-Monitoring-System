package com.models;

import java.io.Serializable;
import java.util.List;

public class AllFireAlarmSensorsDetails implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	//model for store all inserted fire alarm details responses.
	
	private String status;
	private List<FireAlarmSensor> data;
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<FireAlarmSensor> getData() {
		return data;
	}
	public void setData(List<FireAlarmSensor> data) {
		this.data = data;
	}
	
	

}
