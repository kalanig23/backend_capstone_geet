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