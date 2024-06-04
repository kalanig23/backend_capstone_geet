import React, { useState, useEffect } from 'react';
import Header from "../component/header";
import ViewJobs from "../component/viewJob";
import Searchjob from '../component/searchJob';
import {getAllJob} from '../services/job';
import { useNavigate } from "react-router-dom";

const Job = () => {
    const [alljobs, setAllJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getAllJob().then((response)=>{
            setAllJobs(response.data);
        }).catch((error)=>{
            console.log(error);
            setAllJobs([]);
        })
    },[])

    const handleSwitchToViewJobDetails = (id) => {
        navigate(`/job/${id}`);
    }

    const handleCreateJobSwitch = () => {
        navigate('/createjob');
    }

    const handleEditJob = (id) => {
        navigate(`/editjob/${id}`);
    }

    return(
        <div>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'column', padding:'80px 100px'}}>
            { localStorage.getItem('token') && <button onClick={handleCreateJobSwitch} style={{alignSelf: 'flex-end', fontFamily: 'DM Sans', fontWeight: 500, fontSize: '20px', width: '150px', height: '45px', borderRadius: '8px', background: '#FF6B6B', border:0, color: 'white', cursor: 'pointer'}}>Create Job</button> }
                <Searchjob/>
                {
                    alljobs?.map((data, idx)=>(
                        <ViewJobs allJobdata={data} handleSwitch={handleSwitchToViewJobDetails} handleEditJob={handleEditJob}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Job;