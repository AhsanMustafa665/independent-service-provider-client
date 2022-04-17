import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    navigate('/login')

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.name.value;
        const password = event.target.name.value;
    }
    return (
        <div  className='register-form'>
            <h3 className='text-center'>Please Signup</h3>
            <form onSubmit={handleSignup}>
                <input type="text" name='name' placeholder='Your name' />

                <input type="email" name="email" id="" placeholder='Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input type="checkbox" name="terms" id="terms" />
                
                {/* <label className={agree?'ps-2 text-primary':'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Service Terms and Conditions</label> */}
                
                {/* <label className={`ps-2 ${agree? '':'text-danger'}`} htmlFor="terms">Accept Genius Car Service Terms and Conditions</label> */}
                
                <input className='mx-auto w-50 btn btn-success mt-3' type="submit" value="Register" />
            </form>
            <p>Already have an account?<Link to={'/login'}  className='text-danger text-decoration-none'>Please login.</Link></p>
            
            {/* <SocialLogin></SocialLogin> */}
        </div>
      
    );
};

export default Signup;