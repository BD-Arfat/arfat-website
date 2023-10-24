import React from 'react';
import './product.css'
import { useLoaderData } from 'react-router-dom';

const Product = () => {

    const data = useLoaderData();

    const { name, image, dis1, dis2, dis3, dis4, dis5, dis6, dis7, dis8, dis9, server, live, github,Technology } = data;

    return (
        <div className='project'>
            <div className="card lg:card-side bg-base-100 mx-5 md:mx-28 shadow-xl my-40 md:my-52">
                <figure><img src={image} className='md:w-96 rounded-md ps-3' alt="Album" /></figure>
                <div className="text-justify md:w-1/2 ms-5 py-3">
                    <h2 className="card-title text-3xl font-bold text-white">{name}</h2>
                    <div className="py-4 px-4">
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
                    <div>
                        <span className='text-white font-bold text-xl'>Technology : </span> <span className='text-orange-700 font-bold'>{Technology}</span>
                    </div>
                    <div className='mt-3 mb-4'>
                        {/* <button  className='btn btn-success me-3'>Live Site Link</button>
                        <button className='btn btn-info me-3'>Client Site Link</button>
                        <button className='btn btn-success me-3'>Server Site Link</button> */}
                        <a className='btn btn-success text-sm me-3 ' target='_blank' href={live}>Live Site </a>
                        <a className='btn btn-info text-sm me-3 ' target='_blank' href={github}>Client Site </a>
                        <a className='btn btn-success text-sm me-3 mt-2' target='_blank' href={server}>Server Site </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;