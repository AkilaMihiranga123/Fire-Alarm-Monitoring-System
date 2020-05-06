package com.rmi.service.interfacesImpl;

import java.io.Serializable;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;

import com.models.AllFireAlarmSensorsDetails;
import com.models.CreatedFireAlarmSensorDetails;
import com.models.FireAlarmSensor;
import com.models.LoggedUser;
import com.models.RegisteredUser;
import com.models.User;
import com.rmi.service.interfaces.FireAlarmServiceInterface;


public class FireAlarmServiceInterfaceImpl extends UnicastRemoteObject implements FireAlarmServiceInterface, Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	//create new Client object.
	public Client client = ClientBuilder.newClient();

	public FireAlarmServiceInterfaceImpl() throws RemoteException {
		super();
	}

	//implementation for user login method.
	public LoggedUser login(User loginUser) throws RemoteException {
		//get user response.
		Response response = client.target("http://localhost:5000/users/login").request().post(Entity.json(loginUser));
		//set Logged user response.
		LoggedUser loggedUser = response.readEntity(LoggedUser.class);
		//Logged user response.
		return loggedUser;
	}

	
	public RegisteredUser register(User registerUser) throws RemoteException {
		//get user response.
		Response response = client.target("http://localhost:5000/users/register").request().post(Entity.json(registerUser));
		//set Registered User response.
		RegisteredUser registeredUser = response.readEntity(RegisteredUser.class);
		//return Registered User response.
		return registeredUser;
	}

	
	public CreatedFireAlarmSensorDetails addFireAlarmSensor(FireAlarmSensor newFireAlarmSensor) throws RemoteException {
		//get add fire alarm response.
		Response response = client.target("http://localhost:5000/alarmSensors/add").request().post(Entity.json(newFireAlarmSensor));
		//set CreatedFireAlarmSensorDetails response.
		CreatedFireAlarmSensorDetails createdFireAlarmSensorDetails = response.readEntity(CreatedFireAlarmSensorDetails.class);
		//return CreatedFireAlarmSensorDetails response.
		return createdFireAlarmSensorDetails;
	}


	public CreatedFireAlarmSensorDetails updateFireAlarmSensor(FireAlarmSensor updadateFireAlarmSensor, String id) throws RemoteException {
		//get update fire alarm response.
		Response response = client.target("http://localhost:5000/alarmSensors/update/" + id).request().put(Entity.json(updadateFireAlarmSensor));
		//set CreatedFireAlarmSensorDetails response.
		CreatedFireAlarmSensorDetails createdFireAlarmSensorDetails = response.readEntity(CreatedFireAlarmSensorDetails.class);
		//set CreatedFireAlarmSensorDetails response.
		return createdFireAlarmSensorDetails;
	}

	public CreatedFireAlarmSensorDetails getAlarmSensorDetailsById(String id) throws RemoteException {
		//get fire alarm response.
		Response response = client.target("http://localhost:5000/alarmSensors/" + id).request().get();
		//set CreatedFireAlarmSensorDetails response.
		CreatedFireAlarmSensorDetails createdFireAlarmSensorDetails = response.readEntity(CreatedFireAlarmSensorDetails.class);
		//set CreatedFireAlarmSensorDetails response.
		return createdFireAlarmSensorDetails;
	}
	
	public CreatedFireAlarmSensorDetails deleteFireAlarmSensor(String id) throws RemoteException {
		//get delete fire alarm response.
		Response response = client.target("http://localhost:5000/alarmSensors/" + id).request().delete();
		//set CreatedFireAlarmSensorDetails response.
		CreatedFireAlarmSensorDetails createdFireAlarmSensorDetails = response.readEntity(CreatedFireAlarmSensorDetails.class);
		//set CreatedFireAlarmSensorDetails response.
		return createdFireAlarmSensorDetails;
	}

	
	public AllFireAlarmSensorsDetails getAllFireAlarmSensorDetails() throws RemoteException {
		//get all fire alarm details response.
		Response response = client.target("http://localhost:5000/alarmSensors").request().get();
		//set AllFireAlarmSensorsDetails response.
		AllFireAlarmSensorsDetails createdFireAlarmSensorDetails = response.readEntity(AllFireAlarmSensorsDetails.class);
		//set AllFireAlarmSensorsDetails response.
		return createdFireAlarmSensorDetails;
	}

}
