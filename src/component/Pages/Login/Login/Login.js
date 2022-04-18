import { async } from '@firebase/util';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../SharedPages/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;

  if (error) {
    errorElement= <p className='text-danger'>Error: {error?.message}</p>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
      
    signInWithEmailAndPassword(email, password);
  };

    const navigateSignup = (event) => {
        navigate('/register');
  }
  
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast('Please enter your email address!')
    }
    
  }
    return (
        <div>
            <h3 style={{color: 'cornflowerblue'}} className='text-center'>Please login</h3>
            <Form onClick={handleSubmit} className='container w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
 
  <Button  style={{backgroundColor: 'darkslategray'}}  variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Login
  </Button>
        
          {errorElement}
          </Form>
        <div className='text-center'>
        <p>Want see a doctor? <Link
            to={"/signup"}
            className="text-primary text-decoration-none" onClick={navigateSignup}>
           Please register.</Link></p>
        
            <p>Forget password?<button onClick={resetPassword}
            className="text-primary btn btn-link text-decoration-none" >
            Reset password.
            </button>
        </p>
            </div>
        <SocialLogin></SocialLogin>
        <ToastContainer/>
        </div>
        
    );
};

export default Login;