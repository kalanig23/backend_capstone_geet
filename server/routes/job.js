const express = require('express');
const routes= express.Router();
const {verifyAuth} = require('../middleware/verifyAuth');
const {createJob} = require('../controller/job');

routes.get('/', (req, res)=>{
    res.status(200).send('job routes!!!')
});

routes.post('/createjob', verifyAuth, createJob);

module.exports = routes;