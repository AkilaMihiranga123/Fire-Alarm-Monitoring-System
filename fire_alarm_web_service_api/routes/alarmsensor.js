const express =  require('express');
const router = express.Router();
const AlarmSensor = require('../models/AlarmSensor');

//implement route for get all fire alarm sensor details.
//if request was success then pass all data and success status.
//if in an error,then pass error status.
router.route('/').get((req, res) => {
    AlarmSensor.find()
        .then(alarms => res.status(200).json({ status: "Success", data: alarms }))
        .catch(() => res.status(400).json({ status: "Error", data:{} }));
});

//implement route for add new alarm for the database.
router.route('/add').post((req, res) => {
    //get each values for the new variables
    const sensorCode = req.body.sensorCode;
    const floorNumber = req.body.floorNumber;
    const roomNumber = req.body.roomNumber;
    const smokeLevel = '1';//set default smoke level as 1.
    const co2Level = '1';//set default cO2 level as 1.
    const status = 'false';//set default status as false

    //Then crate new AlarmSensor object and assign values
    const newAlarmSensor = new AlarmSensor({
        sensorCode,
        floorNumber,
        roomNumber,
        smokeLevel,
        co2Level,
        status
    });

    //if request was success, then crate new alarm sensor record and pass it with successful status.
    //if in an error,then pass error status.
    newAlarmSensor.save()
        .then((alarm) => res.status(200).json({ status: "Success", data: alarm }))
        .catch(() => res.status(400).json({ status: "Error", data: {} }));
});

//implement route for get one fire alarm sensor details according to the id.
//if request was success then pass the successful status with relevant alarm details .
//if in an error,then pass error status with empty array.
router.route('/:id').get((req, res) => {
    AlarmSensor.findById(req.params.id)
        .then(alarm =>res.status(200).json({ status: "Success", data: alarm }))
        .catch(() => res.status(400).json({ status: "Error", data:{} }));
});

//implement route for get one fire alarm sensor based on id and delete alarm sensor details
//if request was success then pass then delete the record and pass success status with deleted details.
//if in an error,then record delete process is unsuccessful and pass error status.
router.route('/:id').delete((req, res) => {
    AlarmSensor.findByIdAndDelete(req.params.id)
        .then((alarm) => res.status(200).json({ status: "Success", data: alarm }))
        .catch(() => res.status(400).json({ status: "Error", data:{} }));
});

//implement route for update fire alarm sensor details.
//so that search the sensor details based on the id and update it.
//if request was success then pass then delete the record and pass success status with deleted details.
//if in an error,then record update get error and send error as the status.
router.route('/update/:id').put((req, res) => {
    AlarmSensor.findById(req.params.id)
        .then(updateAlarm => {
            //assign all new details into variables
            updateAlarm.sensorCode = req.body.sensorCode;
            updateAlarm.floorNumber = req.body.floorNumber;
            updateAlarm.roomNumber = req.body.roomNumber;
            updateAlarm.smokeLevel = req.body.smokeLevel;
            updateAlarm.co2Level = req.body.co2Level;
            updateAlarm.status = req.body.status;

            updateAlarm.save()
                .then((alarm) => res.status(200).json({ status: "Success", data: alarm }))
                .catch(() => res.status(400).json({ status: "Error", data:{} }));
        })
        .catch(() => res.status(400).json({ status: "Error", data:{} }));
});

module.exports = router;