import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({data}) => {
    return (
        <div>
            <div className="card md:w-96 bg-info">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-white text-center">{data.name}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${data.id}`} className="btn btn-primary btn-outline w-full">All details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;