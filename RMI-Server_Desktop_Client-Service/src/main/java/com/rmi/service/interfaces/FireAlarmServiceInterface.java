package com.rmi.service.interfaces;

import java.rmi.Remote;
import java.rmi.RemoteException;

import com.models.AllFireAlarmSensorsDetails;
import com.models.CreatedFireAlarmSensorDetails;
import com.models.FireAlarmSensor;
import com.models.LoggedUser;
import com.models.RegisteredUser;
import com.models.User;



public interface FireAlarmServiceInterface extends Remote {
	//method for user login.
	public LoggedUser login(User loginUser) throws RemoteException;
	//method for user registration.
	public RegisteredUser register(User registerUser) throws RemoteException;
	//method for add new alarm sensor.
	public CreatedFireAlarmSensorDetails addFireAlarmSensor(FireAlarmSensor newFireAlarmSensor) throws RemoteException;
	////method for update fire alarm sensor details.
	public CreatedFireAlarmSensorDetails updateFireAlarmSensor(FireAlarmSensor updadateFireAlarmSensor, String id) throws RemoteException;
	//method for get fire alarm sensor details by id.
	public CreatedFireAlarmSensorDetails getAlarmSensorDetailsById(String id) throws RemoteException;
	//method for delete fire alarm sensor details.
	public CreatedFireAlarmSensorDetails deleteFireAlarmSensor(String id) throws RemoteException;
	//method for get all fire alarm sensor details.
	public AllFireAlarmSensorsDetails getAllFireAlarmSensorDetails() throws RemoteException;

}
