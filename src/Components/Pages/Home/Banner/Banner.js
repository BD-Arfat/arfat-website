import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './banner.css'

const Banner = () => {

    return (
        <div className='mb-5 banner'>
            
            <h1 draggable='true' className='text-white md:pt-[280px] md:text-7xl font-bold banner-text1'>Welcome to our website</h1>
            <h1 draggable='true' className='mt-8 text-white font-bold text-3xl bannter-text'> ARIFUFL ISLAM ARFAT</h1>
            <h5 className='text-2xl mt-5 text-white font-bold'>I'am A
                <span className='ms-3 animate' >
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['FRONT END DEVELOPER', 'MERN STACK DEVELOPER', 'REACT DEVELOPER', 'Back end developer']}
                        loop={1}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                    />
                </span>
            </h5>
            <div>
                {/* <button className='btn font-bold text-black px-14 mt-6'>Resume</button>
            <button className='btn btn-outline font-bold text-black px-14 mt-6'>Contact Me</button> */}
            </div>
        </div>
    );
};

export default Banner;