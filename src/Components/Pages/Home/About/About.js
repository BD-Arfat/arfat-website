import React from 'react';
import about from '../../../../image/abouts.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about pt-16 pb-32'>
            <h1 className='logo text-6xl font-bold'>ABOUT ME</h1>
            <div>
                <div className="hero pt-20 text-white w-11/12 mx-auto">
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt='' src={about} className="w-96 rounded-xl aboutImage" />
                        <div className='text-justify w-1/2'>
                            <h1 className="text-5xl font-bold about-text">MD ARIFUL ISLAM</h1>
                            <p className="py-6">Passionate about gaining knowledge and developing abilities through practical application. Experienced in the ecosystems of web development. Contribute in a demanding setting where I may use my willpower, tenacity, abilities, teamwork, and experience to accomplish company goals. .</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;