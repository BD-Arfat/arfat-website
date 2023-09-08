import React from 'react';
import about from '../../../../image/abouts.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about md:pt-24 pt-14 pb-32'>
            <h1 className='logo md:text-6xl text-5xl font-bold'>ABOUT ME</h1>
            <div>
                <div className="hero pt-16 text-white w-11/12 mx-auto">
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt='' src={about} className="w-96 rounded-xl aboutImage" />
                        <div className='text-justify md:w-1/2'>
                            <h1 className="md:text-5xl text-3xl font-bold about-text">MD ARIFUL ISLAM</h1>
                            <p className="py-6">Passionate about gaining knowledge and developing abilities through practical application. Experienced in the ecosystems of web development. Contribute in a demanding setting where I may use my willpower, tenacity, abilities, teamwork, and experience to accomplish company goals. .</p>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h1 className='md:text-xl text-lg font-bold about-text'>Email : arfat1islam5162@gmail.com</h1>
                                    <h1 className='md:text-xl text-lg font-bold about-text'>Contact Number : +8801846615162</h1>
                                    <h1 className='md:text-xl text-lg font-bold about-text'>Address : Chittagong, Bangladesh</h1>
                                    <div className='flex items-center gap-4 mt-5'>
                                        <h1><a target='_blank' href="https://www.linkedin.com/in/ariful-islam-b4a405274/" className='btn btn-info px-9 btn-outline font-bold' >LinkedIn</a></h1>
                                        <h1><a target='_blank' href="https://github.com/BD-Arfat" className='btn btn-info px-9 btn-outline font-bold'>GitHub</a></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;