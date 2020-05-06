import React, {Component} from 'react';
const axios = require('axios');

export class SensorTwoSimulate extends Component {
	async AlarmSensorTwoSendData() {
		try {
			const id = "5eadc0ec189bdd4098045a73";
			const sensorCode = "C3";
			const floorNumber = 3;
			const roomNumber = 32;
			const min = 1;
			const max = 10;
			const smokeLevel = Math.floor(Math.random() * max) + min;
			const co2Level = Math.floor(Math.random() * max) + min;
			
			if(smokeLevel > 5 || co2Level > 5){
				const status = "true";
				await axios.request({
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					url: `http://localhost:5000/alarmSensors/update/${id}`,
					data: JSON.stringify({ sensorCode, floorNumber, roomNumber, smokeLevel, co2Level, status }),
				});
			}
			else {
				const status = "false";
				await axios.request({
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					url: `http://localhost:5000/alarmSensors/update/${id}`,
					data: JSON.stringify({ sensorCode, floorNumber, roomNumber, smokeLevel, co2Level, status }),
				});
			}
		} 
		catch (error) {
			console.log(error);
		}
	}
	async componentDidMount() {
		try {
			this.AlarmSensorTwoSendData();
			setInterval(async () => {
				this.AlarmSensorTwoSendData();
			}, 10000);
		}
		catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<div className="col-md-12 m-auto">
				<div className="card border-primary card-body">
					<h2>Fire Alarm Sensor Two Sending Data...  <i class="fas fa-arrow-alt-circle-right"></i></h2>
				</div>
			</div>
		);
	}
}
export default SensorTwoSimulate;