import { async } from '@firebase/util';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
 
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement= <p className='text-danger'>Error: {error?.message}</p>
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      
      signInWithEmailAndPassword(email, password);
    }

    const navigateSignup = (event) => {
        navigate('/home');
  }
  
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
    return (
        <div>
            <h3 className=' text-center'>Please login</h3>
            <Form onClick={handleSubmit} className='container w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
 
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit" onClick={navigateSignup}>
    Login
  </Button>
        </Form>
        {errorElement}
            <p>Want see a doctor?<Link
            to={"/signup"}
            className="text-primary text-decoration-none" onClick={navigateSignup}>
          Please register.</Link></p>
        
            <p>Forget password?<Link
            to={"/signup"}
            className="text-primary text-decoration-none" onClick={resetPassword}>
            Reset password.
            </Link>
        </p>
        <SocialLogin></SocialLogin>
        </div>
        
    );
};

export default Login;