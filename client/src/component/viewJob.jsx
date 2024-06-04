import React from "react";
import './viewJob.css';
import jobimage from '../assets/joblogo.png';
import nosofemplogo from '../assets/nosemployee.png';
import rupeelogo from '../assets/rupeelogo.png';
import locationlogo from '../assets/locationlogo.png';

const ViewJobs = ({allJobdata, handleSwitch, handleEditJob}) => {
    return (
        <div className="view-job-card">
            <div style={{padding: 20, display: "flex", width: '100%', justifyContent: "space-between"}}>
                <div className="section">
                    <div className="one">
                        <img src={jobimage} alt="jobimage" className="job-logo"/>
                    </div>
                    <div className="two">
                        <p>{allJobdata.title}</p>
                        <div className="sub-two">
                            <div style={{marginTop: 5}}><img src={nosofemplogo} alt="nos-emp-logo"/><span>11-50</span></div>
                            <div style={{marginTop: 5}}>
                                <img src={rupeelogo} alt="rupee-logo"/>
                                <span>{allJobdata.salary}</span>
                            </div>
                            <div style={{display: "flex"}}>
                                <img src={locationlogo} alt="location-logo"/>
                                <span style={{margin: 'auto'}}>{allJobdata.location}</span>
                            </div>
                        </div>
                        <div style={{marginTop: 8}}>
                            <span>{allJobdata.locationType}</span>
                            <span>{allJobdata.jobType}</span>
                        </div>
                    </div>
                </div>
                <div className="three">
                    <div style={{display: 'flex', flexDirection: "row"}}>
                        {allJobdata?.skills?.map((s,i)=>(
                            <button key={i} style={{background: '#FFEEEE', border: 0, color: 'black', fontFamily: 'DM Sans', fontWeight: 500, fontSize:'15px', width: '95px', height: '33px', borderRadius: '5px', margin:'0 10px'}}>{s}</button>
                        ))}
                    </div>
                    <div style={{display: "flex", justifyContent:'flex-end'}}>
                        {
                            localStorage.getItem('token') &&
                            <button style={{background: 'white', border: '2px solid #ED5353', color: '#ED5353', fontFamily: 'DM Sans', fontWeight: 500, fontSize:'20px', width: '155px', height: '36px', borderRadius: '5px', cursor: "pointer", marginRight: '15px'}} onClick={()=>handleEditJob(allJobdata._id)}>Edit Job</button>
                        }
                        <button style={{background: '#ED5353', border: 0, color: 'white', fontFamily: 'DM Sans', fontWeight: 500, fontSize:'20px', width: '155px', height: '36px', borderRadius: '5px', cursor: "pointer", marginRight: '15px'}} onClick={()=>handleSwitch(allJobdata._id)}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewJobs;