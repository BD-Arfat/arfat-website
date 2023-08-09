import React from 'react';

const Service = () => {
    return (
        <div className='about pt-14 pb-20 mt-5'>
            <h1 className='logo text-6xl font-bold'>My Service</h1>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {/* 1 */}
                <div className="card w-96 bg-info text-center text-primary-content">
                    <div className="card-body">
                        <div>
                            <img className='rounded-full w-24 mx-auto' src='data:image/png;base64,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' alt="" />
                        </div>
                        <h2 className="text-center font-bold text-3xl">E-commerce website</h2>
                    </div>
                </div>

                {/* 2 */}
                <div className="card w-96 bg-info text-center text-primary-content">
                    <div className="card-body">
                        <div>
                            <img className='w-24 mx-auto rounded-full' src="data:image/png;base64,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" alt="" />
                        </div>
                        <h2 className="text-center font-bold text-3xl">Portfolio website</h2>
                    </div>
                </div>

                {/* 3 */}
                <div className="card w-96 bg-info text-center text-primary-content">
                    <div className="card-body">
                        <div>
                            <img className='w-24 mx-auto rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFV248WgCuRvnFLqpT_PbZHea2E2RtVlratQ&usqp=CAU" alt="" />
                        </div>
                        <h2 className="text-center font-bold text-3xl">Payment system</h2>
                    </div>
                </div>

                {/* 4 */}
                <div className="card w-96 bg-info text-center text-primary-content">
                    <div className="card-body">
                        <div>
                            <img className='w-24 mx-auto rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R4SRDbIlrYN6YBZUEPKBblxEibBvaMvE5w&usqp=CAU" alt="" />
                        </div>
                        <h2 className="text-center font-bold text-3xl">Front End website</h2>
                    </div>
                </div>

                {/* 5 */}
                <div className="card w-96 bg-info text-center text-primary-content">
                    <div className="card-body">
                        <div>
                            <img className='w-24 mx-auto rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5lu-4e0wQ1A8AKCfUMocACzJq29W2XekPg&usqp=CAU" alt="" />
                        </div>
                        <h2 className="text-center font-bold text-3xl">Back End website</h2>
                    </div>
                </div>

                {/* 6 */}
                <div className="card w-96 bg-info text-center text-primary-content">
                    <div className="card-body">
                        <div>
                            <img className='w-24 mx-auto rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxSQCByiAgGOe7jIAReTPsB0Gv6TVLmoLEQ&usqp=CAU" alt="" />
                        </div>
                        <h2 className="text-center font-bold text-3xl">Mern Stack website</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Service;