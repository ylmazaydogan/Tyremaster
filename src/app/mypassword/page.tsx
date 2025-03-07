import AccountSidebar from "@/components/AccountSidebar";

const AccountPage = () => {
    return (
        <main className="flex-grow">
            <div className="md:border-b border-light-silver-2 relative h-fit">
                <div className="flex flex-col py-6 lg:py-0 lg:pt-8 lg:pb-11 responsive relative z-10">
                    <span className="text-sm lg:text-base uppercase text-gray">all your account details</span>
                    <h2 className="text-2xl lg:text-4xl font-semibold mt-2 uppercase text-black">my account</h2>
                    <p className="text-sm lg:text-base uppercase text-gray">access your account to manaage personel information, track orders, and more.</p>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row w-full bg-white mt-12 mb-8 ml-8">
                {/* Sidebar Component */}
                <AccountSidebar />

                {/* Main Content */}
                <div className="flex flex-col w-full xl:w-5/6 bg-white p-8 border border-light-silver-2 rounded-st  xl:ml-8 mr-20 ">
                    {/* My Password Section */}
                    <div className="mb-4">
                        <h2 className="text-black text-4xl font-semibold uppercase ">My Password</h2>
                    </div>

                    <form className="w-full">
                        <div className="mb-4">
                            <label className="block text-sm text-dark-gray" htmlFor="currentPassword">
                                Current password*
                            </label>
                            <input
                                type="password"
                                id="currentPassword"
                                className="w-3/4 p-2 mt-2 border border-light-silver rounded-st"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="block text-sm text-dark-gray" htmlFor="newPassword">
                                    New password*
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="w-full p-2 mt-2 border border-light-silver rounded-st"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-dark-gray" htmlFor="confirmPassword">
                                    Confirm new password*
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full p-2 mt-2 border border-light-silver rounded-st"
                                />
                            </div>

                            <div className="flex items-end">
                                <button type="submit" className="bg-green text-white font-semibold py-3 px-5 rounded-st w-1/2">
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