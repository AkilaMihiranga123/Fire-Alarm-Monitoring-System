const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
//set port number
const port = process.env.PORT || 5000;

//user cors for the app
app.use(cors());
app.use(express.json());

//Import User route and Fire Alarm route.
const userRoute = require('./routes/user');
const alarmSensorRoute = require('./routes/alarmsensor');

//then use the imported routes.
app.use('/users', userRoute);
app.use('/alarmSensors', alarmSensorRoute);

//Connect DB
mongoose.connect(process.env.MongoDB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true }, () => 
    console.log('Connected to DB.!')
);

//Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});