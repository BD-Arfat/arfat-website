import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabar from '../Navbar/Navabar';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navabar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;