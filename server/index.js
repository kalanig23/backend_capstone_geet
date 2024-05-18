const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname,"log.txt"),{
    flags: "a" //append to the file
})

const errorStream = fs.createWriteStream(path.join(__dirname,"error.txt"),{
    flags: "a" //append to the file
})

const authRoute = require('./routes/auth');
const jobRoute = require('./routes/job');

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

app.use((req, res, next)=>{
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const date = `${now.toLocaleDateString()}`;
    const log = `${req.method} ${req.originalUrl} ${time} ${date}`;
    errorStream.write(log+'\n');
    res.status(404).send('Route not found')
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})