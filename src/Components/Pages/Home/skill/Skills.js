import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills mt-5'>
            <h1 className='font-bold text-6xl logo pt-9'>My All Skills</h1>
            <div>
                <div class="bg-cover flex h-screen justify-center items-center">
                    <div class="glide grid xl:w-[54rem] lg:w-[42rem] md:w-[30rem] sm:w-[18rem] px-16 py-8 bg-gray-700 bg-opacity-60 rounded-3xl">
                        <div class="glide__track " data-glide-el="track">
                            <ul class="glide__slides">
                                <li class="glide__slide">
                                    <div class="relative flex flex-col text-center bg-gray-800 h-40 items-center justify-center rounded-3xl duration-300 ease-in-out">
                                        <span class="absolute w-4 h-4 rounded-full bg-red-200 right-4 top-4"></span>
                                        <span class="text-5xl font-semibold px-6 py-4 bg-red-200 text-gray-800 rounded-full mb-4">
                                            A
                                        </span>
                                        <span class="text-red-200 font-bold">
                                            BLOCK A
                                        </span>
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="relative flex flex-col text-center bg-gray-800 h-40 items-center justify-center rounded-3xl">
                                        <span class="absolute w-4 h-4 rounded-full bg-red-200 right-4 top-4"></span>
                                        <span class="text-5xl font-semibold px-6 py-4 bg-red-200 text-gray-800 rounded-full mb-4">
                                            B
                                        </span>
                                        <span class="text-red-200 font-bold">
                                            BLOCK B
                                        </span>
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="relative flex flex-col text-center bg-gray-800 h-40 items-center justify-center rounded-3xl">
                                        <span class="absolute w-4 h-4 rounded-full bg-red-200 right-4 top-4"></span>
                                        <span class="text-5xl font-semibold px-6 py-4 bg-red-200 text-gray-800 rounded-full mb-4">
                                            C
                                        </span>
                                        <span class="text-red-200 font-bold">
                                            BLOCK C
                                        </span>
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="relative flex flex-col text-center bg-gray-800 h-40 items-center justify-center rounded-3xl">
                                        <span class="absolute w-4 h-4 rounded-full bg-red-200 right-4 top-4"></span>
                                        <span class="text-5xl font-semibold px-6 py-4 bg-red-200 text-gray-800 rounded-full mb-4">
                                            D
                                        </span>
                                        <span class="text-red-200 font-bold">
                                            BLOCK D
                                        </span>
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="relative flex flex-col text-center bg-gray-800 h-40 items-center justify-center rounded-3xl">
                                        <span class="absolute w-4 h-4 rounded-full bg-red-200 right-4 top-4"></span>
                                        <span class="text-5xl font-semibold px-6 py-4 bg-red-200 text-gray-800 rounded-full mb-4">
                                            E
                                        </span>
                                        <span class="text-red-200 font-bold">
                                            BLOCK E
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="glide__arrows" data-glide-el="controls">
                            <button class="glide__arrow glide__arrow--left left-4" data-glide-dir="<">
                                <div class="h-9 w-9 bg-gray-800 rounded-xl flex justify-center items-center my-auto hover:bg-red-200 duration-300 ease-in-out">
                                    <i class="fas fa-angle-left text-red-200 text-2xl"></i>
                                </div>
                            </button>
                            <button class="glide__arrow glide__arrow--right right-4" data-glide-dir=">">
                                <div class="h-9 w-9 bg-gray-800 rounded-xl flex justify-center items-center my-auto hover:bg-red-200 duration-300 ease-in-out">
                                    <i class="fas fa-angle-right text-red-200 text-2xl"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;