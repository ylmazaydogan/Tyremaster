export default function AccountPage() {
    return (
        <div className="flex flex-col p-6 space-y-6 ">

            {/* Page Header */}
            <div className="mb-6 ml-10">
                <p className="text-medium-gray text-sm uppercase ">ALL YOUR ACCOUNT DETAILS</p>
                <h3 className="text-4xl font-bold uppercase text-black mt-2 ">MY ACCOUNT</h3>

                <p className="text-medium-gray mt-2 text-base ">
                    Access your account to manage personal information, track orders, and more.
                </p>

            </div>
            <hr className="border-cool-gray w-full" />

            <div className="flex space-x-9">
                {/* Sidebar */}
                <div className="hidden xl:flex flex-col p-6 w-1/6 bg-white border border-light-silver rounded-lg shadow-sm">
                    <div className="text-black font-semibold uppercase mb-6 text-base">MY ACCOUNT</div>
                    <hr className="border border-light-silver"></hr>
                    <div className="w-full h-2 bg-green rounded mb-6"></div>
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="flex items-center justify-between py-2 font-semibold text-black hover:text-green text-xs-custom transition">
                            MY INFORMATION
                        </a>
                        <hr className="border border-light-silver"></hr>
                        <a href="#" className="flex items-center justify-between py-2 font-semibold text-black hover:text-green text-xs-custom transition">
                            MY ORDERS
                        </a>
                        <hr className="border border-light-silver"></hr>
                        <a href="#" className="flex items-center justify-between py-2 font-semibold text-black text-xs-custom hover:text-green transition">
                            CHANGE PASSWORD
                        </a>
                        <hr className="border border-light-silver"></hr>
                    </div>
                    <button className="flex items-center justify-center w-full mt-8 bg-black text-white py-3 rounded-md font-semibold text-sm">
                        <span className="mr-2">🔒</span> Logout
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Address Form */}
                    <div className="p-6 bg-white border border-light-silver rounded-lg shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-4xl font-bold uppercase text-black ">MY ADDRESS</h3>
                            <div className="w-full h-px bg-gray-300 mt-2"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-dark-gray mb-2 text-sm">Name*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <label className="block text-dark-gray mb-2 text-sm">Last name*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <label className="block text-dark-gray text-sm mb-2">Company name</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-dark-gray text-sm mb-2">Address line*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <label className="block text-dark-gray text-sm mb-2">House number*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <label className="block text-dark-gray text-sm mb-2">Postcode*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <label className="block text-dark-gray text-sm mb-2">City*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <label className="block text-dark-gray text-sm mb-2">Country*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-dark-gray text-sm mb-2">Your Email*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div>
                                <label className="block text-dark-gray text-sm mb-2">Your Phone*</label>
                                <input className="border border-light-silver p-2 rounded-lg w-full" />
                            </div>
                            <div className="md:col-span-2 flex items-end gap-4">
                                <div className="w-full">
                                    <label className="block text-dark-gray text-sm mb-2">Your VAT country</label>
                                    <input className="border border-light-silver p-2 rounded-lg w-full" />
                                </div>
                                <div className="w-full">
                                    <label className="block text-dark-gray text-sm mb-2">Your VAT number</label>
                                    <input className="border border-light-silver p-2 rounded-lg w-full" />
                                </div>
                                <button className="bg-green text-white py-3 px-6 rounded-lg font-semibold w-full max-w-xs text-xs-custom ">

                                    CHECK VAT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
