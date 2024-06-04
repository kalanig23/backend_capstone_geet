import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {createJob, getJobByJobId, updateJob} from '../services/job';
import './createJob.css';

const CreateJob = () => {
    const url = new URL(window.location.href);
    const isEditJob = url.pathname.includes('edit')
    const navigate = useNavigate();
    const [createJobData, setCreateJobData] = useState({
        title: '', 
        companyName: '',
        location: '',
        salary: '',
        description: '',
        locationType: '',
        jobType: '',
        skills:''
    });

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/login');
        } else {
            if(isEditJob) {
                const id= url.pathname.split('/')[2];
                 getJobByJobId(id).then((response)=>{
                    const skills = response.data.skills.join(',');
                    response.status === 200 && setCreateJobData({...response.data, skills})
                 }).catch(err=>{
                    console.log(err);
                 })
            }
        }
    }, []);

    const handleChange = (e) => {
        setCreateJobData((createJobData)=> {
            return {...createJobData, [e.target.name]: e.target.value}
        })
    }
    
    const handleSubmitCreateJob = async(e) => {
        e.preventDefault();
        if(isEditJob) {
            const id= url.pathname.split('/')[2];
            const response = await updateJob(createJobData, id);
            if(response.status===200){
                navigate('/job')
            }
        } else {
            const response = await createJob(createJobData);
            alert(response.data);
            if(response.status===201){
             navigate('/job')
            }
        }
    }

    return (
        <div className='create-job-contaier'>
            <div className='create-job-form-part'>
                <h3>Add job description</h3>
                <form className='create-job-form' onSubmit={handleSubmitCreateJob}>
                    <div>
                        <label>Company Name *</label>
                        <input onChange={handleChange} value={createJobData.companyName} type='text' placeholder='Enter your company name here' name='companyName'/>
                    </div>
                    <div>
                        <label>Add logo URL</label>
                        <input onChange={handleChange} type='text' placeholder='Enter the link'/>
                    </div>
                    <div>
                        <label>Job position *</label>
                        <input onChange={handleChange} value={createJobData.title} type='text' placeholder='Enter job position' name='title'/>
                    </div>
                    <div>
                        <label>Monthly salary *</label>
                        <input onChange={handleChange} value={createJobData.salary} type='text' placeholder='Enter Amount in rupees' name='salary'/>
                    </div>
                    <div>
                        <label>Job Type *</label>
                        <select onChange={handleChange} value={createJobData.jobType} name='jobType'>
                            <option value=''>Select</option>
                            <option value='Remote'>Remote</option>
                            <option value='In House'>In House</option>
                        </select>
                    </div>
                    <div>
                        <label>Remote/office *</label>
                        <select onChange={handleChange} value={createJobData.locationType} name='locationType'>
                            <option value=''>Select</option>
                            <option value='Full Time'>Full Time</option>
                            <option value='Part Time'>Part Time</option>
                        </select>
                    </div>
                    <div>
                        <label>Location *</label>
                        <input onChange={handleChange}  value={createJobData.location} type='text' placeholder='Enter Location' name='location'/>
                    </div>
                    <div>
                        <label>Job Description *</label>
                        <textarea onChange={handleChange} value={createJobData.description} type='text' placeholder='Type the job description' name='description'></textarea>
                    </div>
                    <div>
                        <label>About Company</label>
                        <input onChange={handleChange} type='text' placeholder='Type about your company'/>
                    </div>
                    <div>
                        <label>Skills Required *</label>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <input onChange={handleChange} type='text'  value={createJobData.skills} placeholder='Enter the must have skills' name='skills'/>
                            <div style={{marginTop: 15, width: 'fit-content', display: 'flex', flexDirection: 'row', justifyContent: 'normal', background: '#FFEEEE'}}>
                                {createJobData.skills?.split(',').map((s,idx)=>(
                                    <span key={idx} style={{marginRight: '15px'}}>
                                        <span style={{fontFamily:'DM Sans', fontWeight: 500, marginLeft: 10}}>{s}</span>
                                        <button style={{width:'25px', height:'25px', marginLeft: 10, background: '#FF6B6B', border:0, color: 'white', cursor: 'pointer'}}>X</button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Information</label>
                        <input onChange={handleChange} type='text' placeholder='Enter the additional information'/>
                    </div>
                    <div className='create-cancel-job-btn'>
                        <button className='cancel-job-btn'>Cancel</button>
                        <button className='create-job-btn'>{isEditJob ? 'Edit Job' : 'Add Job'}</button>
                    </div>
                </form>
            </div>
            <div className='create-job-image-part'>
                <p>Recruiter add job details here</p>
            </div>
        </div>
    )
}

export default CreateJob;