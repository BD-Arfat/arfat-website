import React, { useEffect, useState } from 'react';
import './project.css'
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect( ()=>{
        fetch('db.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    } ,[])

    return (
        <div className='projects mt-5'>
            <div className="w-11/12 mx-auto mb-12">
                <h1 className='logo font-bold text-6xl pt-9 pb-16'>My Projects</h1>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        projects.map(data => <Project key={data.id} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;