import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navabar = () => {

    const items = <>
        <li className='navbarItems'><Link to={'/'}>Home</Link></li>
        <li className='navbarItems'><Link>Abouts</Link></li>
        <li className='navbarItems'><Link>Experience</Link></li>
        <li className='navbarItems'><Link>Service</Link></li>
        <li className='navbarItems'><Link>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto rounded-2xl mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            items
                        }
                    </ul>
                </div>
                <Link draggable='true' to={'/'} className="text-5xl font-bold lg:ms-4 logo">ARFAT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {items}
                </ul>
            </div>
            <div className="navbar-end">
                <Link target='_blank' to={'https://drive.google.com/file/d/12sJ7_w08UCV_rfmqTFBmw1Htt0cFf9tL/view?usp=sharing'} className="btn px-10 text-white font-bold">Resume</Link>
            </div>
        </div>
    );
};

export default Navabar;