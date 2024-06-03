import React,{useState} from 'react';
import FromRegistration from '../component/form';
import RegistrationImage from '../component/img';
import { useNavigate } from "react-router-dom";
import './registration.css';
import FormBtn from '../component/formBtn';
import {register} from '../services/auth';

const registrationInput = [{
    placeholder: 'Name',
    type: 'text',
    width: '599px',
    height: '64px',
    name:'name',
},{
    placeholder: 'Email',
    type: 'email',
    width: '599px',
    height: '64px',
    name:'email',
},{
    placeholder: 'Mobile',
    type: 'text',
    width: '599px',
    height: '64px',
    name:'mobile',
},{
    placeholder: 'Password',
    type: 'password',
    width: '599px',
    height: '64px',
    name:'password',
},{
    type: 'checkbox',
    label: 'By creating an account, I agree to our terms of use and privacy policy',
    width: '20px',
    height: '17px',
    htmlFor: 'checkbox',
    name:'checkbox',
}];

const Registration = () => {
    const [registrationData, setRegistrationData] = useState({
        name:'',
        email:'',
        mobile:'',
        password:'',
    });
    const navigate = useNavigate();

    const handleRegistrationChange=(e)=>{
        setRegistrationData({...registrationData, [e.target.name]:e.target.value})
    }

    const registerUser=async(e)=>{
        e.preventDefault();
        const response = await register(registrationData);
        if(response.status===201){
            alert(response.data);
            navigate("/login");
        }
        if(response.status===400){
            alert(response.data);
        }
    }

    const handleSwitch=()=>{
        navigate("/login");
    }

    return(
        <div className='registration-container'>
            <div className='form-container'>
                <FromRegistration
                    handleSwitch={handleSwitch}
                    title='Create an account'
                    btnTitle='Create Account'
                    InputField={registrationInput}
                    handleChange={handleRegistrationChange}
                    handleSubmit={registerUser}
                />
                <FormBtn
                    handleSwitch={handleSwitch}
                    bottomQuote='Already have an account?'
                    bottomQuoteTitle='Sign In'
                />
            </div>
        <RegistrationImage/>       
    </div>
    )
}

export default Registration;