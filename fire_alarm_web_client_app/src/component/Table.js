import React from "react";


const Table = ({alarms}) => {
    //set red color code
    const red = {
        background: "rgba(237,67,66,0.76)"
    };
    //set green color code
    const green = {
        color: "green"
    };


    //render the Table.
    //design simple table design an set all alarm details.
    //fetching data set to table and give specific key as alarm id.
    //then only we cal identify each record correctly and get details according to the id.
    //then co2 level grater than 5, then set column as red and red icon.
    //if co2 level less tha 5,then set green color text.
    //then smoke level grater than 5, then set column as red and red icon.
    //if smoke level less tha 5,then set green color text.
    //if co2 level or smoke level grater than 5, then set status as Active with red badge.
    //if co2 level or smoke level less than 5, then set status as Inactive with green badge.
    return(
        <div className="row mt-5">
            <div className="col-md-10 m-auto">
                <div className="card card-body text-center">
                    <i className="fab fa-gripfire fa-6x red"></i>
                    <h1>Fire Alarm Monitoring System</h1>
                    <div className="row mt-1">
                        <div className="col-md-12 m-auto">
                            <div className="card border-primary card-body text-center">
                                <table className="table table-hover">
                                    <thead>
                                    <tr className="table-primary">
                                        <th scope="col">SENSOR CODE</th>
                                        <th scope="col">FLOOR NUMBER</th>
                                        <th scope="col">ROOM NUMBER</th>
                                        <th scope="col">SMOKE LEVEL</th>
                                        <th scope="col">CO2 LEVEL</th>
                                        <th scope="col">ALARM STATUS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {alarms.map(fireAlarm => (
                                        <tr key={fireAlarm._id}>
                                            <th>{fireAlarm.sensorCode}</th>
                                            <th>{fireAlarm.floorNumber}</th>
                                            <th>{fireAlarm.roomNumber}</th>
                                            <th style={fireAlarm.smokeLevel > 5 ? red : green}>{fireAlarm.smokeLevel}   {fireAlarm.smokeLevel > 5 ? <i className="fas fa-exclamation-triangle dark-red"></i>:<i></i>}</th>
                                            <th style={fireAlarm.co2Level > 5 ? red : green}>{fireAlarm.co2Level}   {fireAlarm.co2Level > 5 ? <i className="fas fa-exclamation-triangle dark-red"></i>:<i></i>}</th>
                                            <td>{fireAlarm.status?<h4><span className="badge badge-danger">ACTIVE</span>   <i class="fas fa-bell red"></i></h4>:<h4><span className="badge badge-success">INACTIVE</span></h4>}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Table;