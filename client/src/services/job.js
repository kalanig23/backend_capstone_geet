import axios from 'axios';
import {BACKEND_URL} from './constant';

export const getAllJob=async()=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/api/job/getalljob`);
        return response;
    }catch(err){
        return err.response;
    }
}

export const getJobByJobId=async(jobId)=> {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/job/getjobbyjobid/${jobId}`);
        return  response;
    }catch(err) {
        return err.response;
    }
}

export const createJob=async(data)=>{
    try {
        const response = await axios.post(`${BACKEND_URL}/api/job/createjob`,
            data,
           { 
                headers: {
                    "Content-Type":'application/json',
                    "authorization": `${localStorage.getItem('token')}`
                }
            }
        );
        return response;
    }catch(err){
        return err.response;
    }
}

export const updateJob=async(data, jobId)=>{
    try {
        const response = await axios.patch(`${BACKEND_URL}/api/job/updatejob/${jobId}`,
            data,
           { 
                headers: {
                    "Content-Type":'application/json',
                    "authorization": `${localStorage.getItem('token')}`
                }
            }
        );
        return response;
    }catch(err){
        return err.response;
    }
}