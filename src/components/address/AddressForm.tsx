"use client";

import PaymentMethod from "./PaymentMethod";

const AddressForm = () => {
    return (
        <div className="w-full md:w-2/4  rounded-st  border-light-silver-2 border-y border-x border-l-0 pl-10 pr-10">
            <div className="flex items-center mb-6 pb-2 mt-3.5">
                <h2 className="text-4xl font-bold text-black uppercase">Your Addresses</h2>
                <div className="flex-grow h-px ml-5 bg-light-silver-2"></div>
            </div>

            <form className="space-y-4">
                <div className="flex items-center">
                    <h3 className="font-semibold text-base text-black uppercase">Delivery Address</h3>
                    <div className="flex-grow h-px ml-4 bg-light-silver-2"></div>
                </div>

                {/* Form Alanları */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-base text-black">Name *</label>
                        <input type="text" className="border p-2 border-light-silver-2 rounded-st" />
                    </div>
                    <div>
                        <label className="block text-base font-medium text-black ">Last name *</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded-st" />
                    </div>
                    <div>
                        <label className="block text-base text-black">Company name</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded-st" />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-base text-black">Address line *</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded-st w-full" />
                    </div>
                    <div>
                        <label className="block text-base text-black">House number *</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded-st" />
                    </div>
                    <div>
                        <label className="block text-base text-black">Postcode *</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded-st" />
                    </div>
                    <div>
                        <label className="block text-base text-black">City *</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded-st" />
                    </div>
                    <div>
                        <label className="block text-base text-black">Country *</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded-st" />
                    </div>
                    <div>
                        <label className="block text-base text-black">Your Email *</label>
                        <input type="email" className="border border-light-silver-2 p-2 rounded-st w-full" />
                    </div>
                    <div>
                        <label className="block text-base text-black">Your Phone *</label>
                        <input type="tel" className="border border-light-silver-2 p-2 rounded-st w-full" />
                    </div>
                    <div className="md:col-span-3">
                        <label className="block text-base text-black">Your VAT number</label>
                        <input type="text" className="border border-light-silver-2 p-2 rounded w-full" />
                    </div>
                </div>

                <div className="">
                    <h2 className="text-black font-semibold text-lg mb-5">Billing address</h2>
                    <h2 className="text-base text-black mt-1">Is the same as your delivery address by default?</h2>
                    <label className="flex items-center space-x-2 mt-1">
                        <input type="checkbox" />
                        <span className="text-base text-black">Enter a different billing address</span>
                    </label>
                </div>
            </form>

            {/* Payment Method Bölümü */}
            <PaymentMethod />
        </div>
    );
};

export default AddressForm;
