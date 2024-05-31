const express = require('express');
const routes= express.Router();
const {verifyAuth} = require('../middleware/verifyAuth');
const {createJob, fetchAllJob, fetchParticularJob, fetchJobByJobId, updateJob} = require('../controller/job');

routes.get('/', (req, res)=>{
    res.status(200).send('job routes!!!')
});

routes.post('/createjob', verifyAuth, createJob);
routes.get('/getalljob', fetchAllJob);
routes.get('/getparticulatjob', fetchParticularJob);
routes.get('/getjobbyjobid/:jobId', fetchJobByJobId);
routes.patch('/updatejob/:jobId', verifyAuth, updateJob);

module.exports = routes;