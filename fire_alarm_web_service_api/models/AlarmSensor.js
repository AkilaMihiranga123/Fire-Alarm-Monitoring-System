const mongoose = require('mongoose');


//Create Fire Alarm model
//then this model for the database creation.
const SensorSchema = new mongoose.Schema({
    //set sensorCode as String type value and is is required
    sensorCode: {
        type: String,
        required: true
    },
    //set floorNumber as Number type value and is is required
    floorNumber: {
        type: Number,
        required: true
    },
    //set roomNumber as Number type value and is is required
    roomNumber: {
        type: Number,
        required: true
    },
    //set smokeLevel as Number type value and is is required.
    //and set minimum value as 1 and maximum value as 10.
    smokeLevel: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    //set co2Level as Number type value and is is required.
    //and set minimum value as 1 and maximum value as 10.
    co2Level: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    //set status as Boolean type value and is is required
    status: {
        type: Boolean,
        required: true
    }
},{
    //set timestamps to get created and updated date and time.
    timestamps: true,
});
//create database table name called AlarmSensor.
const AlarmSensor = mongoose.model('AlarmSensor', SensorSchema);

module.exports = AlarmSensor;