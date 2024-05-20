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

module.exports = {createJob};