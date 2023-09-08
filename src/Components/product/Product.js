import React from 'react';
import './product.css'
import { useLoaderData } from 'react-router-dom';

const Product = () => {

    const data = useLoaderData();

    const {name, image,dis1, dis2, dis3, dis4, dis5, dis6, dis7, dis8, dis9, server, live, github} = data;
    
    return (
        <div className='project'>
            <div className="card lg:card-side bg-base-100 mx-28 shadow-xl my-36">
                <figure><img src={image} className='w-96' alt="Album" /></figure>
                <div className="text-justify w-1/2 ms-5 py-3">
                    <h2 className="card-title text-3xl font-bold text-white">{name}</h2>
                    <div className="py-4">
                    <p>{dis1}</p>
                    <p>{dis2}</p>
                    <p>{dis3}</p>
                    <p>{dis4}</p>
                    <p>{dis5}</p>
                    <p>{dis6}</p>
                    <p>{dis7}</p>
                    <p>{dis8}</p>
                    <p>{dis9}</p>
                    </div>
                    <div className='mt-3'>
                        {/* <button  className='btn btn-success me-3'>Live Site Link</button>
                        <button className='btn btn-info me-3'>Client Site Link</button>
                        <button className='btn btn-success me-3'>Server Site Link</button> */}
                        <a  className='btn btn-success me-3' target='_blank' href={live}>Live Site Link</a>
                        <a className='btn btn-info me-3' target='_blank' href={github}>Client Site Link</a>
                        <a  className='btn btn-success me-3' target='_blank' href={server}>Server Site Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;