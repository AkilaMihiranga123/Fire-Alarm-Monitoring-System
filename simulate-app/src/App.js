import React from 'react';
import './App.css';

//import all sensor components
//then only that components.
import SensorOne from './component/SensorOneSimulate';
import SensorTwo from './component/SensorTwoSimulate';
import SensorThree from './component/SensorThreeSimulate';
import SensorFour from './component/SensorFourSimulate';
import SensorFive from './component/SensorFiveSimulate';

//render simple user interface
//design simple design
//and then user imported sensors for render
function App() {
  return (
    <div className="row mt-5">
            <div className="col-md-10 m-auto">
                <div className="card card-body text-center">
                    <i className="fab fa-gripfire fa-6x red"></i>
                    <h1>Fire Alarm Monitoring System</h1>
                    <SensorOne></SensorOne>
                    <SensorTwo></SensorTwo>
                    <SensorThree></SensorThree>
                    <SensorFour></SensorFour>
                    <SensorFive></SensorFive>
                </div>
            </div>
        </div>
  );
}

export default App;
