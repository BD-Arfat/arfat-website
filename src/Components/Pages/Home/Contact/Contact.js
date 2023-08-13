import React from 'react';

const Contact = () => {
    return (
        <div className='skills mt-10'>
            <div>

                <div class="container mx-auto my-20 w-1/3 border rounded-lg border-purple-500 bg-info">
                    <div class="p-5 space-y-5 shadow-xl">
                        <h4 class="text-center text-white font-bold text-3xl">Contact Us</h4>

                        <form>
                            <div class="grid grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                                    placeholder="Last Name"
                                />
                                <input
                                    type="email"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                    placeholder="Email"
                                />
                                <input
                                    type="tel"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                    placeholder="Phone"
                                />
                                <textarea
                                    cols="10"
                                    rows="5"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>
                            <input
                                type="submit"
                                value="Send Message"
                                class="focus:outline-none mt-5 bg-white px-4 py-2 text-black font-bold w-full"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;