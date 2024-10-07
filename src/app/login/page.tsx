import React from 'react';


const RegisterPage = () => {
    return (
        <main className='flex-grow'>
            <div className='grid lg:grid-cols-2 mt-10 lg:mt-12 lg:divide-x responsive'>
                <div className='flex flex-col gap-2 lg:pl-56'>
                    <div className='flex gap-6 items-center'>
                        <span className='text-black font-semibold uppercase flex text-3xl'>login</span>
                        <hr className='bg-[#E6E6E6] w-full h-[1px]' />
                    </div>
                    <div className='flex flex-col'>
                        <form className='flex flex-col lg:min-h-[594px]'>
                            <div className='gap-1 flex flex-col pr-10'>
                                <label className='text-base'>
                                    Username or email address
                                    <span className='text-red'>*</span>
                                </label>
                                <input
                                    className='border placeholder:text-gray outline-none rounded-full pl-5 text-base placeholder:text-base h-11' />
                            </div>
                            <div className='mt-6 gap-1 flex flex-col pr-10'>
                                <label className='text-base'>
                                    Password
                                    <span className='text-red'>*</span>
                                </label>
                                <input
                                    className='border placeholder:text-gray outline-none rounded-full pl-5 text-base placeholder:text-base h-11' />
                            </div>
                            <div className='flex items-center justify-between mt-7 pr-10'>
                                <label className='flex text-base text-gray cursor-pointer group transition-all transform duration-300 ease-in-out'>
                                    <input
                                        type="checkbox"
                                        className='w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500'
                                    />
                                    <span className='ml-2 select-none group-hover:text-green transition-all duration-300 ease-in-out'>Remember me</span>
                                </label>
                                <a href="#" className='text-sm text-green-600 hover:text-green-500'>
                                    Lost your password?
                                </a>
                            </div>
                            <div className='flex justify-between'>
                                <button className="mt-10 w-[553px] h-[52px] bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out">
                                    LOG IN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='flex flex-col gap-4 lg:pl-12'>
                    <span className='text-black font-semibold uppercase text-3xl'>register</span>
                    <p className="text-gray-600">
                        Registering for this site allows you to access your order status and history. Just fill<br/> in the fields below, and we'll get a new account set up for you in no time.
                    </p>
                    <div className="flex justify-start mt-10">
                        <button
                            className="
                                border-2 border-green-500 text-green-500
                                font-semibold py-2 px-10 rounded-full
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
