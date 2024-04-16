import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import LoginArea from './LoginArea/LoginArea';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
           <HomeHeader/>
           <CommonPageHeader title="Login Page" subtitle="Login" />
           <div className="login-container">
        </div>
          



           <LoginArea/>
           <Footer/>
        </>
    );
};

export default Login;