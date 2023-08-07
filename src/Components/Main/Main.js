import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabar from '../Navbar/Navabar';

const Main = () => {
    return (
        <div>
            <Navabar/>
            <Outlet/>

        </div>
    );
};

export default Main;