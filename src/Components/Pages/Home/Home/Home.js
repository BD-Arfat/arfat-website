import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../skill/Skills';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Service />
            <Contact />
        </div>
    );
};

export default Home;