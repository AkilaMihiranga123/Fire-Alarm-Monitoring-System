package com.rmi.server;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

import com.rmi.service.interfacesImpl.FireAlarmServiceInterfaceImpl;

public class Server extends FireAlarmServiceInterfaceImpl{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Server() throws RemoteException {
		super();
	}
	
	public static void main(String[] args) throws RemoteException{
		
		try {
			//create new FireAlarmServiceInterfaceImpl object.
			FireAlarmServiceInterfaceImpl fireAlarmServiceInterfaceImpl = new FireAlarmServiceInterfaceImpl();
			//create new Registry object.
			//assign port number for create new registry.
			Registry registry = LocateRegistry.createRegistry(2099);
			//bind registry.
			registry.rebind("FireAlarmRMIService", fireAlarmServiceInterfaceImpl);
			//print server started message.
			System.out.println("Server Started");
			
		} catch (Exception e) {
			System.err.println("Server exception: " + e.toString()); 
	        e.printStackTrace();
		}
		
	}

}
