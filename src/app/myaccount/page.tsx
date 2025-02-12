import AccountSidebar from "@/components/AccountSidebar";

export default function AccountPage() {
    return (
        <main className="flex-grow mb-">
            
            <div className="md:border-b border-light-silver-2 relative h-fit">
                <div className="flex flex-col py-6 lg:py-0 lg:pt-8 lg:pb-11 responsive relative z-10">
                    <span className="text-sm lg:text-base uppercase text-gray">all your account details</span>
                    <h2 className="text-2xl lg:text-4xl font-semibold mt-2 uppercase text-black">my account</h2>
                    <p className="text-sm lg:text-base uppercase text-gray">access your account to manaage personel information, track orders, and more.</p>
                </div>
            </div>

            <div className="flex flex-col p-6 space-y-6 mb-20 mt-14">
                <div className="flex space-x-9 -ml-10">
                    {/* Sidebar */}
                    <AccountSidebar />

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Address Form */}
                        <div className="p-6 bg-white border border-light-silver rounded-lg shadow-sm">
                            <div className="mb-6">
                                <h3 className="text-4xl font-bold uppercase text-black">MY ADDRESS</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-dark-gray mb-2 text-sm">Name*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div>
                                    <label className="block text-dark-gray mb-2 text-sm">Last name*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div>
                                    <label className="block text-dark-gray text-sm mb-2">Company name</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-dark-gray text-sm mb-2">Address line*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div>
                                    <label className="block text-dark-gray text-sm mb-2">House number*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div>
                                    <label className="block text-dark-gray text-sm mb-2">Postcode*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div>
                                    <label className="block text-dark-gray text-sm mb-2">City*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div>
                                    <label className="block text-dark-gray text-sm mb-2">Country*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-dark-gray text-sm mb-2">Your Email*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-2/3" />
                                </div>
                                <div className="-ml-20">
                                    <label className="block text-dark-gray text-sm mb-2">Your Phone*</label>
                                    <input className="border border-light-silver p-2 rounded-st w-full" />
                                </div>

                                <div className="md:col-span-2 flex items-end gap-4">
                                    <div className="w-full">
                                        <label className="block text-dark-gray text-sm mb-2">Your VAT country</label>
                                        <input className="border border-light-silver p-2 rounded-st w-full" />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-dark-gray text-sm mb-2">Your VAT number</label>
                                        <input className="border border-light-silver p-2 rounded-st w-full" />
                                    </div>
                                    <button className="bg-green text-white py-3 px-6 rounded-lg font-semibold w-full max-w-xs text-xs-custom scroll -mr-10 ">

                                        CHECK VAT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
