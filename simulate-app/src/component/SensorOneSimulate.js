import React, {Component} from 'react';
const axios = require('axios');

export class SensorOneSimulate extends Component {
	async AlarmSensorOneSendData() {
		try {
			//Simply set the values for the sensor
			const id = "5eadc0cd189bdd4098045a72";
			const sensorCode = "A1";
			const floorNumber = 1;
			const roomNumber = 5;
			const min = 1;
			const max = 10;
			//Create random value for smoke level and co2 level.
			//that auto generated value in between 1 and 10
			const smokeLevel = Math.floor(Math.random() * max) + min;
			const co2Level = Math.floor(Math.random() * max) + min;

			//if generated smoke level or co2 level grater than 5,then status set as true.
			if(smokeLevel > 5 || co2Level > 5){
				const status = "true";
				await axios.request({
					method: "PUT",    //use put method for get access with api route
					headers: {
						"Content-Type": "application/json"  // set header values
					},
					url: `http://localhost:5000/alarmSensors/update/${id}`, //then call the rest api update fire alarm route.
					//then pass the new data.
					data: JSON.stringify({ sensorCode, floorNumber, roomNumber, smokeLevel, co2Level, status }),
				});
			}
			//if generated smoke level or co2 level less than 5,then status set as false.
			else {
				const status = "false";
				await axios.request({
					method: "PUT", //use put method for get access with api route
					headers: {
						"Content-Type": "application/json" // set header values
					},
					url: `http://localhost:5000/alarmSensors/update/${id}`,  //then call the rest api update fire alarm route.
					//then pass the new data.
					data: JSON.stringify({ sensorCode, floorNumber, roomNumber, smokeLevel, co2Level, status }),
				});
			}
		} 
		catch (error) { //if get any error then show error message.
			console.log(error);
		}
	}
	async componentDidMount() {
		try {
			this.AlarmSensorOneSendData();
			setInterval(async () => { //set interval for the process
				this.AlarmSensorOneSendData();
			}, 10000); // in every 10 seconds pass the values.
		}
		catch (error) { // if get any error then print error message.
			console.log(error);
		}
	}
	//render simple user interface
	//set simple design
	render() {
		return (
			<div className="col-md-12 m-auto">
				<div className="card border-primary card-body">
					<h2>Fire Alarm Sensor One Sending Data...  <i class="fas fa-arrow-alt-circle-right"></i></h2>
				</div>
			</div>
		);
	}
}
export default SensorOneSimulate;