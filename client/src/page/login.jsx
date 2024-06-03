import React,{useState}  from 'react';
import FromLogin from '../component/form';
import LoginImage from '../component/img';
import './login.css';
import { useNavigate } from "react-router-dom";
import FormBtn from '../component/formBtn';
import {signIn} from '../services/auth';

const loginInput = [{
    placeholder: 'Email',
    type: 'text',
    width: '599px',
    height: '64px',
    name: 'email'
},{
    placeholder: 'Password',
    type: 'password',
    width: '599px',
    height: '64px',
    name: 'password'
}];

const Login = () =>{
    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();

    const handleSwitch=()=>{
        navigate("/registration");
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await signIn(loginData);
        console.log(response);
        if(response.status===200){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            alert(response.data.name);
            navigate("/job");
        }
        if(response.status===400){
            alert(response.data);
        }
    }

    const handleLoginChange = (e) => {
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    return(
        <div className='login-container'>
            <div className='form-container'>
                <FromLogin
                    title='Already have an account?'
                    btnTitle='Sign in'
                    InputField={loginInput}
                    handleSubmit={loginUser}
                    handleChange={handleLoginChange}
                />
                <FormBtn
                    handleSwitch={handleSwitch}
                    bottomQuote='Don’t have an account?'
                    bottomQuoteTitle='Sign Up'
                />
            </div>
            <LoginImage/>       
        </div>
    )
}

export default Login;