import React, { useEffect, useState } from 'react';
import './project.css'
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect( ()=>{
        fetch(' https://ariful-islam-pi.vercel.app/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    } ,[])

   

    return (
        <div className='projects mt-5'>
            <div className="">
                <h1 className='logo font-bold md:text-6xl text-5xl pt-20 pb-16'>My Projects</h1>
                
                <div className='my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        projects.map(data => <Project key={data._id} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;