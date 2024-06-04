import React from 'react';
import ReactangleOne from '../assets/Rectangle.png';
import ReactangleTwo from '../assets/Rectangles.png';
import Reactanglethree from '../assets/Rectangless.png';
import photo from '../assets/photo.png';
import { useNavigate } from 'react-router-dom';

const styles = {
    headermain: {
        height: '140px',
        background: '#ED5353',
        borderRadius: '0px 0px 62px 55px',
        position: 'relative',
    },
    headeroneomage: {
        backgroundImage: 'url(' + ReactangleOne + ')',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: '55%',
        left: 0,
        right: 0,
        bottom: 0,
    },
    headertwoomage: {
        backgroundImage: 'url(' + ReactangleTwo + ')',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: '40%',
        right: 0,
        bottom: 0,
    },
    headerthreeomage: {
        backgroundImage: 'url(' + Reactanglethree + ')',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: '73%',
        right: 0,
        bottom: 0,
    },
    title: {
        position: 'absolute',
        top: 30,
        left: 80,
        right: 10,
        bottom: 0,
        color: 'white',
        fontFamily: 'DM Sans',
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '43.21px',
    },
    loginBtn: {
        position: 'absolute',
        top: 30,
        left: '80%',
        right: 10,
        bottom: 0,
        color: 'white',
        fontFamily: 'DM Sans',
        fontSize: '23px',
        fontWeight: 500,
        background: '#FF6B6B',
        border: '2px solid #FFFFFF',
        width: '113px',
        height: '46px',
        borderRadius: '7px',
        cursor: 'pointer',
    },
    registerBtn: {
        position: 'absolute',
        top: 30,
        left: '90%',
        right: 10,
        bottom: 0,
        color: '#FF6B6B',
        fontFamily: 'DM Sans',
        fontSize: '23px',
        fontWeight: 500,
        background: 'white',
        border: '2px solid #FFFFFF',
        width: '113px',
        height: '46px',
        borderRadius: '7px',
        cursor: 'pointer',
    },
    logout:{
        position: 'absolute',
        top: 30,
        left: '75%',
        right: 10,
        bottom: 0,
        color: 'white',
        fontFamily: 'DM Sans',
        fontSize: '23px',
        fontWeight: 500,
        background: '#FF6B6B',
        width: '113px',
        height: '46px',
        borderRadius: '7px',
        cursor: 'pointer',
    },
    recruitername:{
        position: 'absolute',
        top: 30,
        left: '83%',
        right: 10,
        bottom: 0,
        color: 'white',
        fontFamily: 'DM Sans',
        fontSize: '23px',
        fontWeight: 500,
        background: '#FF6B6B',
        width: '170px',
        height: '46px',
        borderRadius: '7px',
    },
    recruiterphoto:{
        position: 'absolute',
        backgroundImage: 'url(' + photo + ')',
        backgroundRepeat: 'no-repeat',
        top: 20,
        left: '94%',
        right: 10,
        bottom: 0,
    }
};

const Header = () => {
    const navigate = useNavigate();

    const handleSwitchRegister =() =>{
        navigate('/registration');
    }

    const handleSwitchLogin =() =>{
        navigate('/login');
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate('/job');
    }

    return(
        <div style={styles.headermain}>
            <div style={styles.headeroneomage}></div>
            <div style={styles.headertwoomage}></div>
            <div style={styles.headerthreeomage}></div>
            <div style={styles.title}>Jobfinder</div>
            {localStorage.getItem('token') ? 
                 <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={styles.logout} onClick={handleLogout}>Logout</div>
                    <div style={styles.recruitername}>Hello! Recruiter</div>
                    <div style={styles.recruiterphoto}></div>
                </div> 
             :
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <button style={styles.loginBtn} onClick={handleSwitchLogin}>Login</button>
                    <button style={styles.registerBtn} onClick={handleSwitchRegister}>Register</button>
                </div>
            }
        </div>
    )
}

export default Header;