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

    return(
        <div>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'column', padding:'80px 100px'}}>
                <Searchjob/>
                {
                    alljobs?.map((data, idx)=>(
                        <ViewJobs allJobdata={data} handleSwitch={handleSwitchToViewJobDetails}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Job;