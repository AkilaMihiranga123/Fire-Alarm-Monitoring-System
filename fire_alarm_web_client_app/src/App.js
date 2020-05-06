import React, { Component} from 'react';
import Table from './component/Table';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      alarms: [], //create array to store alarm details.
      isLoaded: true //create variable for show data loaded or not.
    }
  }

  componentDidMount = async () => {
    try {
      setInterval(async () => { //set interval for fetch data.
        const url = "http://localhost:5000/alarmSensors";  //set the url as get all alarm details route in the rest api.
        const response = await fetch(url);  //fetch the data and assign response in variable
        const result = await response.json(); //and set fetching data into json.
        this.setState({alarms:result.data, isLoaded:false}) // then assign that values into alarms variable and isLoaded variable.
      },40000);//every 40 seconds refreshed.
    } catch (e) {
      console.log(e); //if get any error, print error message.
    }
  };


  //render table component.
  //set simple design
  //if isLoaded variable false, that means  values are loading.
  //then show simple message
  //if alarms array length is 0, then show message as didn't get a alarm.
  //then all things are fine,then render the table components.
  render(){
    if(this.state.isLoaded){
      return <div className="container text-center mt-lg-5">
        <i className="fas fa-spinner fa-5x"></i><br/>
        <h1 className="mt-2">Loading...</h1>
      </div>
    }
    if(!this.state.alarms.length){
      return <div className="container text-center mt-lg-5">
        <h1>Didn't get a Alarm</h1>
      </div>
    }
    return (<Table alarms={this.state.alarms} /> );
  }

}

export default App;
