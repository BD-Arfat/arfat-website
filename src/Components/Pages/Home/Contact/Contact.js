import React from 'react';

const Contact = () => {
    return (
        <div className='skills mt-10'>
            <div class="container mx-auto p-2">
                <div class="md:w-96 mx-auto my-24 bg-sky-800 px-5 py-10 rounded shadow-xl">
                    <div class=" mb-8">
                        <h1 class="font-bold text-3xl">Contact Me</h1>
                    </div>
                    <form action="#">
                        <div class="mt-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div class="mt-5">
                            <label className="label">
                                <span className="label-text">your message</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full h-28" placeholder="You write your words here"></textarea>
                        </div>
                        <div class="mt-5">
                            <input
                                type="submit"
                                value="Submit"
                                class="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;