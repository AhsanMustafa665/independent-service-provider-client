import React from 'react';
import google from '../../../../Assests/images/social/google.png';
import facebook from '../../../../Assests/images/social/facebook.png';
import github from '../../../../Assests/images/social/github.png';
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;
  if (googleError || githubError) {
    errorElement=<p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }

  if (googleUser || githubUser) {
    navigate ('/home');
  }

    return (
        <div className="text-center line">
      <div className="d-flex align-items-center w-50 mx-auto d-block">
        <div
          style={{ height: "2px" }}
          className="bg-success w-25 opacity-25"
        ></div>
        <div className="px-2">or</div>
        <div
          style={{ height: "2px" }}
          className="bg-success w-25 opacity-25"
                ></div>
        </div>
        {errorElement}
        <div>
        <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success mx-auto w-50 mt-3"
      >
        <img src={google} alt="" />
        <span className="px-2">Google sign in</span>
      </button>
      <br />
      <button className="btn btn-success mx-auto w-50 mt-3">
        <img style={{ width: "30px" }} src={facebook} alt="" />
        <span className="px-2">Facebook sign in</span>
      </button>
      <br />
      <button
        onClick={() => signInWithGithub()}
        className="btn btn-success mx-auto w-50 mt-3"
      >
        <img src={github} alt="" />
        <span className="px-2">Github sign in</span>
      </button>
        </div>
      </div>
    );
};

export default SocialLogin;