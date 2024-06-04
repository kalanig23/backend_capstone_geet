import React,{useState, useEffect} from "react";
import Header from "../component/header";
import cmyLogo from "../assets/cmylogo.png";
import stiphend from "../assets/stiphened.png";
import duration from "../assets/duration.png";
import './viewJobdetails.css';
import { getJobByJobId } from "../services/job";

const ViewJobDetails = () => {
    const url = new URL(window.location.href);
    const id = url.pathname.split('/')[2];

    const [jobDetails, setJobDetails] = useState(null);

    useEffect(()=>{
        getJobByJobId(id).then((response)=>{
            if(response.status===500){
                return setJobDetails(null);
            }else if(response.status===404){
                return setJobDetails(null);
            }
            setJobDetails(response?.data)
        }).catch(err=>{
            console.log(err);
            setJobDetails(null);
        })
    },[id]);

    return (
    <div>
      <Header />
      <div className="view-job-details-container">
        <p className="title">
          {jobDetails?.title} {jobDetails?.locationType} job/internship at {jobDetails?.companyName}
        </p>
        <div className="job-details">
          <h6 className="job-time-company">
            <span className="week-ago">1w ago</span>
            <span className="dot-symbol">.</span>
            <span className="job-type">{jobDetails?.jobType}</span>
            <img src={cmyLogo} alt="company-logo" />
            <span className="company-name">{jobDetails?.companyName}</span>
          </h6>
          <div className="job-title-location-edit">
            <div className="job-title-location">
              <h1 className="job-title">{jobDetails?.title}</h1>
              <h4 className="job-location">
                {jobDetails?.location} <span>&#124;</span> India
              </h4>
            </div>
            {localStorage.getItem('token') && <button className="edit-job-btn">Edit Job</button>}
          </div>
          <div className="stipend-duration">
            <div className="stipend-main">
              <span className="stipend">
                <img src={stiphend} alt="stiphend" />
                <span style={{ verticalAlign: "top", marginLeft: "10px" }}>
                  Stipend
                </span>
              </span>
              <span className="sal">Rs ${jobDetails?.salary}/month</span>
            </div>
            <div className="duration-main">
              <span className="duration">
                <img src={duration} alt="duration" />
                <span style={{ verticalAlign: "top", marginLeft: "10px" }}>
                  Duration
                </span>
              </span>
              <span className="duration-month">6 Months</span>
            </div>
          </div>
          <div className="about-company">
            <h3 className="about-title">About company</h3>
            <p className="about-detail">
              We provide technology-based services to help businesses and
              organizations achieve their goals. We offer a wide range of
              services, including software development, system integration,
              network and security services, cloud computing, and data
              analytics. Our primary focus is on leveraging technology to
              streamline business processes, improve productivity, and enhance
              overall efficiency.
            </p>
          </div>
          <div className="about-job-internship">
            <h3 className="about-job-internship-title">
              About the job/internship
            </h3>
            <p className="about-job-internship-details">
              {jobDetails?.description}
            </p>
          </div>
          <div className="skills-main">
            <h3 className="skills-title">Skill &#40;s&#41; required</h3>
            {
                jobDetails?.skills.map((s)=>(
                    <button className="skills-list">{s}</button>
                ))
            }
          </div>
          <div className="additional-main">
            <h3 className="additional-title">Additional Information</h3>
            <p className="additional-details">
              Stipend structure: This is a performance-based internship. In
              addition to the minimum-assured stipend, you will also be paid a
              performance-linked incentive &#40;₹ 2500 per design&#41;.
            </p>
          </div>
        </div>
      </div>
      {jobDetails === null && <p>Job not found</p>}
    </div>
  );
};

export default ViewJobDetails;
