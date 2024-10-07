import InputField from '../components/Input';

const RegisterPage = () => {
    return (
        <main className='flex-grow'>
            <div className='grid lg:grid-cols-2 mt-10 lg:mt-12 responsive'>
                {/* Burada divide-x sınıfını kaldırdık */}
                <div className='flex flex-col gap-2 lg:pl-56'>
                    <div className='flex gap-6 items-center'>
                        <span className='text-black font-semibold uppercase flex text-3xl'>Register</span>
                        <hr className='bg-[#E6E6E6] w-full h-[1px]'></hr>
                    </div>
                    <div className='flex flex-col'>
                        <form className='flex flex-col lg:min-h-[594px]'>
                            <InputField
                                label="Email address"
                                placeholder="Enter your email"
                                required
                            />
                            <InputField
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                required
                                className="mt-6"
                            />
                            <InputField
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm your password"
                                required
                                className="mt-6"
                            />
                            {/* Diğer form alanları burada olabilir */}
                            <p className='text-base text-[#777777] text-justify mt-11'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

                            <div className='flex justify-center lg:mt-auto pt-4 lg:pt-8 border-t mt-4'>
                                <button className="mt-10 w-[552px] h-[66px] bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out uppercase">
                                    register
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                <div className='flex flex-col gap-4 lg:pl-12'>
                    
                    <span className='text-black font-semibold uppercase text-3xl'>login</span>
                    

                    <p className="text-[#777777]">
                        Login here by filling you're username and  password or use your favorite social network<br></br> account to enter to the  site. Site login will simplify the purchase process and allows you<br></br> to  manage your personal account.
                    </p>
                    <div className="flex justify-start mt-10">
                        <button
                            className="
                            border-2 border-green-500 text-green-500
                            font-semibold w-[210px] h-[52px] rounded-lg
                          hover:bg-green-500 hover:text-white
                            transition duration-300 ease-in-out uppercase"
            

                        >
                            login
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default RegisterPage;
