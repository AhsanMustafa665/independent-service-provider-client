import React from 'react';
import Me from '../../Assests/images/me/me1.jpg';
import './About.css';

const About = () => {
    return (
        <div className='d-flex justify-content-around container'>
            <div className='mission'>
            <h2 className='title mb-3'>My mission and goal 👨‍🎓</h2>
            <ul>
                <li>I would like to finish this course called "Programming-Hero" and become a MERN stack web developer.</li>
                <li>Gaining programming knowledge, the shining star of "Programming-Hero", respected teacher 'Jhangkar Mahbub' <br /> wants to give lectures.</li>
                <li>I want to learn different programming languages ​​and create good quality website website.</li>
                
            </ul>
            </div>
           <img style={{width:'20%'}} src={Me} alt="" srcset="" /> 
        </div>
    );
};

export default About;