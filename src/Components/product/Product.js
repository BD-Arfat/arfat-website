import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './product.css'

const Product = () => {
    const project = useParams()
    console.log(project)
    return (
        <div className='project'>
            <div className="card lg:card-side bg-base-100 mx-28 shadow-xl my-36">
                <figure><img src='https://i.ibb.co/sF060ss/projects-3.jpg' className='' alt="Album" /></figure>
                <div className="text-justify w-1/2">
                    <h2 className="card-title">{project.name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;