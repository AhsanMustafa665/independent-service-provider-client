import React from 'react';
import image from '../../Assests/images/logo/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-style'>
            <div>
                <footer className='container bg-dark text-center text-white py-2 pt-4 mt-4 '>
                <p><small>Copyright © {new Date().getFullYear()} | All Rights Reserved by Ahsan</small></p>
                    <div className='d-flex justify-content-around'>
                        <div>
                    <h6>Read my blog</h6>
                    <h6>Read FAQs</h6>
                    <h6>Get help</h6>
                    <h6>Add your Clinic</h6>
                        <h6>Medical near me</h6>
                    </div>
                        <img src={image} alt="" />
                    </div>
            
            </footer>
        </div>
        </div>
    );
};

export default Footer;