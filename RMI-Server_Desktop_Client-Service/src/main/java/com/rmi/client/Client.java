package com.rmi.client;

import java.io.Serializable;
import java.net.MalformedURLException;
import java.rmi.Naming;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;

import com.rmi.service.interfaces.FireAlarmServiceInterface;

public class Client implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private FireAlarmServiceInterface fireAlarmServiceInterface = null;
	
	//create constructor.
	public Client() {
		
		this.setFireAlarmServiceInterface();
	}
	
	//get FireAlarmServiceInterface and return value
	public FireAlarmServiceInterface getFireAlarmServiceInterface() {
		
		return fireAlarmServiceInterface;
	}

	//set FireAlarmServiceInterface
	public void setFireAlarmServiceInterface() {
		
		try {
			//get access for remote object in rmi.
			this.fireAlarmServiceInterface = (FireAlarmServiceInterface) Naming.lookup("rmi://localhost:2099/FireAlarmRMIService");
		
			
		//Handle Exception.
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (RemoteException e) {
			e.printStackTrace();
		} catch (NotBoundException e) {
			e.printStackTrace();
		}
	}
}
