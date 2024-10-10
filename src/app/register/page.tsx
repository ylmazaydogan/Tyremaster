import InputField from '../components/Input';

const RegisterPage = () => {
    return (
        <main className='flex-grow'>
            <div className='grid lg:grid-cols-2 mt-10 lg:mt-12 responsive'>
                
                <div className='flex flex-col gap-2 lg:pl-56'>
                    <div className='flex gap-6 items-center'>
                        <span className='text-black font-semibold uppercase text-4xl font-poppins'>Register</span>
                        <hr className='border-cool-gray w-full h-[1px]' />
                    </div>
                    <div className='flex flex-col'>
                        <form className='flex flex-col lg:min-h-[594px]'>
                            <InputField
                                label="Username"
                                className='font-lato text-sm'
                                required
                            />
                            <InputField
                                label="Email address"
                                type="email"
                                required
                                className="mt-6 font-lato text-sm"
                            />
                            <InputField
                                label="Password"
                                type="password"
                                required
                                className="mt-6 font-lato text-sm"
                            />
                            <p className='text-sm text-gray text-justify mt-11'>
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                            </p>

                            <div className='flex justify-center lg:mt-auto pt-4 lg:pt-8 border-t border-cool-gray mt-4'>
                                <button className="mt-10 w-[552px] h-[66px] bg-green text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out uppercase mb-16">
                                    register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='flex flex-col gap-4 lg:pl-12'>
                    <div className='flex gap-6 items-center'>
                        <span className='text-black font-semibold uppercase text-4xl font-poppins'>login</span>
                        <hr className='border-cool-gray w-full h-[1px]' />
                    </div>
                    <p className="text-gray font-lato text-sm">
                        Login here by filling your username and password or use your favorite social network<br /> account to enter the site. Site login will simplify the purchase process and allows you<br /> to manage your personal account.
                    </p>
                    <div className="flex justify-start mt-10">
                        <button
                            className="
                                border-2 border-green text-green
                                font-semibold w-[210px] h-[52px] rounded-lg
                                hover:bg-green hover:text-white
                                transition duration-300 ease-in-out uppercase
                                mb-4
                            "
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
