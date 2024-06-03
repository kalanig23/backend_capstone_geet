import React from 'react';
import './createJob.css';

const CreateJob = () => {
    return (
        <div className='create-job-contaier'>
            <div className='create-job-form-part'>
                <h3>Add job description</h3>
                <form className='create-job-form'>
                    <div>
                        <label>Company Name</label>
                        <input type='text' placeholder='Enter your company name here'/>
                    </div>
                    <div>
                        <label>Add logo URL</label>
                        <input type='text' placeholder='Enter the link'/>
                    </div>
                    <div>
                        <label>Job position</label>
                        <input type='text' placeholder='Enter job position'/>
                    </div>
                    <div>
                        <label>Monthly salary</label>
                        <input type='text' placeholder='Enter Amount in rupees'/>
                    </div>
                    <div>
                        <label>Job Type</label>
                        <select>
                            <option>Select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                        </select>
                    </div>
                    <div>
                        <label>Remote/office</label>
                        <select>
                            <option>Select</option>
                            <option>Remote</option>
                            <option>In House</option>
                        </select>
                    </div>
                    <div>
                        <label>Location</label>
                        <input type='text' placeholder='Enter Location'/>
                    </div>
                    <div>
                        <label>Job Description</label>
                        <input type='text' placeholder='Type the job description'/>
                    </div>
                    <div>
                        <label>About Company</label>
                        <input type='text' placeholder='Type about your company'/>
                    </div>
                    <div>
                        <label>Skills Required</label>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <input type='text' placeholder='Enter the must have skills'/>
                            <div style={{marginTop: 15, width: 'fit-content', justifyContent: 'normal', background: '#FFEEEE'}}>
                                <span style={{fontFamily:'DM Sans', fontWeight: 500, marginLeft: 10}}>Java Script</span>
                                <button style={{width:'25px', height:'25px', marginLeft: 10, background: '#FF6B6B', border:0, color: 'white', cursor: 'pointer'}}>X</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Information</label>
                        <input type='text' placeholder='Enter the additional information'/>
                    </div>
                </form>
                <div className='create-cancel-job-btn'>
                    <button className='cancel-job-btn'>Cancel</button>
                    <button className='create-job-btn'>+ Add Job</button>
                </div>
            </div>
            <div className='create-job-image-part'>
                <p>Recruiter add job details here</p>
            </div>
        </div>
    )
}

export default CreateJob;