const AccountPage = () => {
    return (
        <div className="w-full bg-white p-6">
            
            <div className="mb-4 ml-10 ">
                <p className="mb-2 font-lato text-medium-gray text-sm">ALL YOUR ACCOUNT DETAILS</p>
                <h2 className="text-black text-4xl font-semibold uppercase font-poppins text-left">MY ACCOUNT</h2>
                <p className="text-gray text-base font-lato text-left">Access your account to manage personal information, track orders, and more.</p>
                <hr className="border-t border-light-silver w-full mt-4"/>
            </div>

            <div className="flex flex-col xl:flex-row w-full bg-white">
                {/* Sidebar */}
                <div className="hidden xl:flex flex-col p-6 w-1/6 bg-white border border-light-silver rounded-lg shadow-sm">
                    <div className="text-black font-semibold uppercase mb-6 font-montserrat text-base">MY ACCOUNT</div>
                    <hr className="border border-light-silver mb-4"></hr>
                    <div className="w-full h-2 bg-green rounded mb-6"></div>
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="flex items-center justify-between py-2 font-semibold font-lato text-black hover:text-green text-xs-custom transition">
                            MY INFORMATION <span className="text-black">{'>'}</span>
                        </a>
                        <hr className="border border-light-silver"></hr>
                        <a href="#" className="flex items-center justify-between py-2 font-semibold text-black font-lato hover:text-green text-xs-custom transition">
                            MY ORDERS <span className="text-black">{'>'}</span>
                        </a>
                        <hr className="border border-light-silver"></hr>
                        <a href="#" className="flex items-center justify-between py-2 font-semibold text-black font-lato text-xs-custom hover:text-green transition">
                            CHANGE PASSWORD <span className="text-black">{'>'}</span>
                        </a>
                        <hr className="border border-light-silver"></hr>
                    </div>
                    <button className="flex items-center justify-center w-full mt-8 bg-black text-white py-3 rounded-md font-semibold text-sm">
                        <span className="mr-2">🔒</span> Logout
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-full xl:w-5/6 bg-white p-8 border border-light-silver rounded-lg shadow-sm ml-0 xl:ml-8">
                    {/* My Password Section */}
                    <div className="mb-4">
                        <h2 className="text-black text-4xl font-semibold uppercase font-poppins">My Password</h2>
                    </div>

                    <form className="w-full">
                        <div className="mb-4">
                            <label className="block text-sm  text-dark-gray font-lato" htmlFor="currentPassword">
                                Current password*
                            </label>
                            <input
                                type="password"
                                id="currentPassword"
                                className="w-full p-2 mt-1 border border-light-silver rounded-lg"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-sm  text-dark-gray font-lato" htmlFor="newPassword">
                                    New password*
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="w-full p-2 mt-1 border border-light-silver rounded-lg"
                                />
                            </div>

                            <div className="flex items-end">
                                <div className="flex-grow">
                                    <label className="block text-sm  text-black" htmlFor="confirmPassword">
                                        Confirm new password*
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="w-full max-w-xs p-1.5 mt-1 border border-light-silver rounded-lg"
                                    />
                                </div>

                                <button type="submit" className="bg-green text-white font-semibold font-lato py-3 px-5 rounded-xl w-1/3">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
