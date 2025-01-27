import React from 'react';

const RegisterPage = () => {
    return (
        <main className='flex-grow'>
            <div className='grid lg:grid-cols-2 mt-10 lg:mt-12 lg:divide-x lg:divide-cool-gray'>
                <div className='flex flex-col gap-2 lg:pl-56'>
                    <div className='flex gap-6 items-center'>
                        <span className='text-black font-semibold uppercase text-4xl font-poppins'>login</span>
                        <hr className='border-cool-gray w-full h-[1px]' />
                    </div>
                    <div className='flex flex-col'>
                        <form className='flex flex-col lg:min-h-[594px]'>
                            <div className='gap-1 flex flex-col pr-10'>
                                <label className='text-sm font-lato'>
                                    Username or email address
                                    <span className='text-red'>*</span>
                                </label>
                                <input
                                    className='border-cool-gray placeholder:text-gray outline-none rounded-full pl-5 text-base placeholder:text-base h-11'
                                />
                            </div>
                            <div className='mt-6 gap-1 flex flex-col pr-10'>
                                <label className='text-sm font-lato'>
                                    Password
                                    <span className='text-red'>*</span>
                                </label>
                                <input
                                    className='border-cool-gray placeholder:text-gray outline-none rounded-full pl-5 text-base placeholder:text-base h-11'
                                />
                            </div>
                            <div className="flex items-center justify-between mt-7 pr-10">
                                <label className="flex items-center text-base text-gray cursor-pointer group transition-all transform duration-300 ease-in-out">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-green-600 bg-gray-100 rounded border-light-silver-2 focus:ring-green-500"
                                    />
                                    <span className="ml-2 select-none group-hover:text-green transition-all duration-300 ease-in-out">
                                        Remember me
                                    </span>
                                </label>
                                <a href="#" className="text-green hover:text-green font-lato text-15px underline">
                                    Lost your password?
                                </a>
                            </div>
                            
                            <div className='flex justify-between'>
                                <button className="mt-10 w-[553px] h-[52px] bg-green text-white font-semibold  hover:bg-green-600 transition-all duration-300 ease-in-out font-lato text-xs-custom">
                                    LOG IN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='flex flex-col gap-4 lg:pl-12'>
                    <div className="flex items-center gap-4">
                        <span className='text-black font-semibold uppercase text-4xl font-poppins'>register</span>
                        <hr className='border-cool-gray w-full h-[1px]' />
                    </div>
                    <p className="text-gray font-lato text-sm ">
                    Registering for this site allows you to  access our B2B Tyre procurement platform. Just fill<br></br> in the fields below, and  we’ll get a new account set up for you in no time. We will only ask<br></br> you  for information necessary to make the purchase process faster and  easier.
                    </p>
                    <div className="flex justify-start mt-10 ml-40">
                        <button
                            className="
                                border-2 border-green text-green
                                font-semibold py-2 px-10 rounded-md
                                hover:bg-green-500 hover:text-white
                                transition duration-300 ease-in-out
                            "
                        >
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;
