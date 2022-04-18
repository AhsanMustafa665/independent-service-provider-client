import React from 'react';
import Doctors from '../Doctors/Doctors';
import Banner from './Banner/Banner';
import doctor from '../../../component/Assests/images/doctor/doctor-1.png';
import card from '../../Assests/images/doctor/card.webp';
import doctor2 from '../../Assests/images/doctor/doctor-2.png'
import './Home.css';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='doctor-container container'>
                <div className='doctor-bio'>
                    <h1>Family practice physician & Internal medicine physician</h1> <br />
                    <h3 className='name'>HI THERE I'M <span>DR. ADOLINA </span></h3>
                    <br />
                <h6>Professional Summary</h6>
                    <p><small>Adept medical doctor with eight solid years of practice experience. Dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology.  </small></p>
                    
                    <h6>Skills</h6>
                    <p><small>-Proven and effective communication skills with patients, families, and other medical professionals. -Leadership abilities to lead and manage practice staff in providing patients with quality care. </small></p>
                    
                    <h6>Work Experience</h6>
                    <li>Diagnose, treat, and prevent various physical injuries and diseases in adults</li>
                    <li>Form and build relationships with patients to make them feel at ease </li>
                    <li>Refer patients to specialists and prescribe medication or treatment.</li>
                    <div className='card-img'>
                        <img className='img-card' src={card} alt="" />
                        <img className='img-card2' src={doctor2} alt="" />
                        
                    </div>


                </div>
                
            <img className='h-50 doctor' src={doctor} alt="" />
            </div>
            
            <Doctors></Doctors>
        </>
    );
};

export default Home;