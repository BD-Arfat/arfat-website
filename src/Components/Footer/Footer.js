import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-4 footer-center p-10 bg-primary text-primary-content">
                <div>
                   <img src="https://bd-arfat.github.io/Portfolio-Website/assets/images/photo_2023-04-25_21-03-38.jpg" className='w-24 rounded-full footer-image' alt="" />
                    <p className="font-bold">
                        <span className="text-xl">MD Ariful Islam Arfat</span> <br />+8801846615162
                    </p>
                    <p>arfat1islam5162@gmail.com</p>
                </div>
                
            </footer>
        </div>
    );
};

export default Footer;