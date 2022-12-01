const express = require("express")
const app = express();
const mongoose = require('mongoose');
const picRoute= require("./routes/pic");
const reqRoute = require('./routes/requests');
const mailRoute= require('./routes/send');
const feedbackRoute = require('./routes/feedback')
const verifyRoute = require('./routes/verify');
const rewardsRoute =require('./routes/getScore');

require('dotenv').config();
const cors = require('cors');

app.use(cors());
mongoose.connect(process.env.DB_URL)
.then(console.log("DB connected"))
.catch((err) => console.log(err));
//SOH-SigmaSquad

app.use(express.json());
app.use("/api/pic",picRoute);
app.use('/api/requests',reqRoute);
app.use('/api/mail',mailRoute);
app.use('/api/feedback',feedbackRoute);
app.use('/api/qr',verifyRoute);
app.use('/api/rewards',rewardsRoute);
app.listen("6000", () => {
    console.log("Backend is running");
});