import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../../SharedPages/Loading/Loading';

const Signup = () => {
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
  
    if (loading || updating) {
        return <Loading></Loading>
      }
    

    if (user) {
        console.log('user',user);
    }

    const handleSignup = async (event) => {
        event.preventDefault();
        console.log(event.target);
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName});
        alert('Updated profile');
        navigate('/home');
    }

    return (
        <div  className='register-form'>
            <h3 className='text-center'>Please Signup</h3>
            <form onSubmit={handleSignup}>
                <input type="text" name='name' placeholder='Your name' />

                <input type="email" name="email" id="" placeholder='Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                
                <label className={`ps-2 ${agree?'' : 'text-danger'}`} htmlFor="terms">Accept Doctor's Website Terms and Conditions</label>
                
                {/* {/* <label className={`ps-2 ${agree? '':'text-danger'}`} htmlFor="terms">Accept Genius Car Service Terms and Conditions</label> */}
                
                <input disabled={!agree} className='mx-auto w-50 btn btn-success mt-3' type="submit" value="Register" />
            </form>
            <p>Already have an account?<Link to={'/login'}  className='text-danger text-decoration-none' onClick={navigateLogin}>Please login.</Link></p>
            
            <SocialLogin></SocialLogin>
        </div>
      
    );
};

export default Signup;