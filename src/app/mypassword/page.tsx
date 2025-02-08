const AccountPage = () => {
    return (
        <main className="flex-grow ">
           <div className="border-y md:border-b border-light-silver-2 relative h-fit ">
                <div className="flex flex-col py-6 lg:py-0 lg:pt-8 lg:pb-11 responsive relative z-10">
                    <span className="text-sm lg:text-base uppercase text-gray">all your account details</span>
                    <h2 className="text-2xl lg:text-4xl font-semibold mt-2 uppercase text-black">my account</h2>
                    <p className="text-sm lg:text-base uppercase text-gray ">access your account to manaage personel information, track orders, and more.</p>
                </div>
           </div>

            <div className="flex flex-col xl:flex-row w-full bg-white mt-12 mb-8">
                {/* Sidebar */}
                <div className="hidden xl:flex flex-col p-10 w-1/6 bg-white border border-light-silver rounded-lg">
                    <div className="text-black font-semibold uppercase mb-3 text-base">MY ACCOUNT</div>
                    <hr className="border border-light-silver mb-4"></hr>
                    <div className="w-full h-2 bg-green rounded mb-6"></div>
                    <div className="flex flex-col space-y-5">
                        <a href="#" className="flex items-center justify-between  font-semibold text-black hover:text-green text-xs-custom ">
                            MY INFORMATION <span className="text-black">{'>'}</span>
                        </a>
                        <hr className="border border-light-silver"></hr>
                        <a href="#" className="flex items-center justify-between  font-semibold text-black hover:text-green text-xs-custom ">
                            MY ORDERS <span className="text-black">{'>'}</span>
                        </a>
                        <hr className="border border-light-silver"></hr>
                        <a href="#" className="flex items-center justify-between font-semibold text-black text-xs-custom hover:text-green">
                            CHANGE PASSWORD <span className="text-black">{'>'}</span>
                        </a>
                        <hr className="border border-light-silver"></hr>
                    </div>
                    <button className="flex items-center justify-center w-full mt-5 bg-black text-white py-3 rounded-md font-semibold text-sm">
                        <span className="mr-2">🔒</span> Logout
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-full xl:w-5/6 bg-white p-8 border border-light-silver rounded-lg shadow-sm ml-0 xl:ml-8">
                    {/* My Password Section */}
                    <div className="mb-4">
                        <h2 className="text-black text-4xl font-semibold uppercase ">My Password</h2>
                    </div>

                    <form className="w-full">
                        <div className="mb-4">
                            <label className="block text-sm  text-dark-gray " htmlFor="currentPassword">
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
                                <label className="block text-sm  text-dark-gray " htmlFor="newPassword">
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

                                <button type="submit" className="bg-green text-white font-semibold py-3 px-5 rounded-xl w-1/3 ">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AccountPage;