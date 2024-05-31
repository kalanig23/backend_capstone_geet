const Job = require('../models/jobs');

const createJob = async(req, res, next)=>{
    try {
        const {title, companyName, location, salary, description, locationType, jobType, skills} = req.body;
        
        if(!title || !companyName || !location || !salary || !description || !locationType || !jobType || !skills){
            return res.status(400).send('Please fill all the fileds');
        }
        const skillsArray = skills.split(',').map((skills)=>skills.trim());
        
        const newJob = new Job({
            title, companyName, location, salary, description, locationType, jobType, skills:skillsArray, refUserId:req.userId, createdAt: new Date(), updatedAt: new Date()
        })
        
        await newJob.save();
        
        res.status(201).send('Job created successfully!!!');
    } catch(err){
        next(err);
    }
}

const fetchAllJob = async(req, res, next)=>{
    try {
        // START: based on skill param for search feature
        const { skills } = req.query;
        const skillsArray = skills != undefined ? skills.split(',').map((skill)=>skill.trim()) : null;
        console.log(skills,  skillsArray === null);
        if(skills?.length===0 || skillsArray === null) {
            const alljob = await Job.find();
            res.status(200).send(alljob);
        } else {
            const alljob = await Job.find({skills: {$in: skillsArray}});
            res.status(200).send(alljob);
        }
    }catch(err) {
        next(err);
    }
}

const fetchParticularJob = async(req, res, next)=>{
    try {//-1 indeicate to sort decending order
        //in select we can do 3 way (a.) select('-title') : it remove the title
        //(b.) selecct('title') : it give result only title
        //(c.) select(['title', 'skills']) : it give the result with title and siklls 
        const particulatJob = await Job.find().select(['title', 'skills', 'companyName']).sort({createdAt : -1})
        res.status(200).send(particulatJob);
    }catch(err) {
        next(err);
    }
}

const fetchJobByJobId = async(req, res, next)=>{
    try {
        const {jobId} = req.params;
        console.log(jobId);
        const jobListById = await Job.findById(jobId);
        if(!jobListById) {
            return res.status(404).send('Job not found')
        }
        res.status(200).send(jobListById);
    }catch(err) {
        next(err);
    }
}

const updateJob = async(req, res, next) => {
    try {
        const {jobId} = req.params;
        const job = await Job.findById(jobId);
        const updateskills = req.body.skills ? req.body.skills.split(',').map((skill)=>skill.trim()) : null;
        const updatedJobs = await Job.findByIdAndUpdate(jobId,{
            title: req.body.title || job.title,
            companyName: req.body.companyName || job.companyName,
            location: req.body.location || job.location,
            salary: req.body.salary || job.salary,
            description: req.body.description || job.description,
            locationType: req.body.locationType || job.locationType,
            jobType: req.body.jobType || job.jobType,
            skills: updateskills || job.skills,
            updatedAt: new Date(),
            createdAt: job.createdAt
        }, {new:true});
        res.status(200).send(updatedJobs);
    }catch(err){
        next(err);
    }
}

module.exports = {createJob, fetchAllJob, fetchParticularJob, fetchJobByJobId, updateJob};