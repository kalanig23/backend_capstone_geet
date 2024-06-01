const port = 4000;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const env = require('dotenv');
env.config();

const logStream = fs.createWriteStream(path.join(__dirname,"log.txt"),{
    flags: "a" // a is used to append to the file
})

const errorStream = fs.createWriteStream(path.join(__dirname,"error.txt"),{
    flags: "a" //append to the file
})

const authRoute = require('./routes/auth');
const jobRoute = require('./routes/job');

app.use(
    cors({
        origin: '*',
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((request, response, next) => {
    const now = new Date();
    const time = ` ${now.toLocaleTimeString()}`;
    const date = ` ${now.toLocaleDateString()}`;
    const log = `${request.method} ${request.originalUrl} ${time} ${date}`;
    logStream.write(log+'\n');
    next();
});

app.use('/api/auth', authRoute);
app.use('/api/job', jobRoute);

app.get('/', (req, res)=>{
    res.status(200).send('Hello World!!!');
});

app.use((err, req, res, next)=>{
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const date = `${now.toLocaleDateString()}`;
    const log = `${req.method} ${req.originalUrl} ${time} ${date}`;
    errorStream.write(log+ err.stack + '\n');
    res.status(500).send('Internal Server Error')
});

app.use((req, res, next)=>{
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const date = `${now.toLocaleDateString()}`;
    const log = `${req.method} ${req.originalUrl} ${time} ${date}`;
    errorStream.write(log+'\n');
    res.status(404).send('Route not found')
});

mongoose.connect(process.env.MONGOOSE_URI)
        .then(()=>console.log('connected to DB'))
        .catch((err)=>console.log(err));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})