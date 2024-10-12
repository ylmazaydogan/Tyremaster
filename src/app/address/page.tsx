import React from "react";

export default function Address() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-8 ">
      {/* Sol Bölüm - Adres Formu */}
      <div className="w-full md:w-2/3 bg-white shadow-md  rounded-lg">
        <div className="flex items-center mb-4">
          <h2 className="text-4xl font-bold font-poppins text-black uppercase">Your Addresses</h2>
          <div className="flex-grow h-px ml-4 bg-light-silver"></div>
        </div>

        <form className="space-y-4">
          <div className="flex items-center">
            <h3 className="font-semibold font-arimo text-base text-black uppercase">Delivery Address</h3>
            <div className="flex-grow h-px ml-4 bg-light-silver"></div>
          </div>

          {/* Form Alanları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-base font-arimo text-black">Name *</label>
              <input type="text" className="border p-2 border-cool-gray rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-medium text-black font-arimo">Last name *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">Company name</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">Address line *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">House number *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">Postcode *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">City *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">Country *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">Your Email *</label>
              <input type="email" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-arimo text-black">Your Phone *</label>
              <input type="tel" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-base font-arimo text-black">Your VAT number</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-lato text-black font-semibold text-lg mb-5">Billing address</h2>

            <h2 className="font-lato text-base text-black mb-3">Is the same as your delivery address by default?</h2>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-base text-black font-lato">Enter a different billing address</span>
            </label>
          </div>
        </form>
      </div>

      {/* Sağ Bölüm - Ürün Listesi ve Sepet Özeti */}
      <div className="w-full md:w-1/3 bg-white shadow-md p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold">Your Products</h2>
          <div className="flex-grow h-px ml-4 bg-light-silver"></div>
        </div>

        {/* Ürün Listesi */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4">
              <img src="/tire-image.png" alt="Product Image" className="h-16 w-16" />
              <div className="flex-1">
                <h3 className="font-semibold">Hankook</h3>
                <p className="text-gray-600 text-sm">Maxxis Mecotra 3</p>
                <p className="text-gray-600 text-sm">Description: 215/55R18 99V</p>
                <p className="text-gray-600 text-sm">Season: Summer</p>
              </div>
              <p className="font-semibold">1 x € 109,94</p>
            </div>
          ))}
        </div>

        {/* Sepet Özeti */}
        <div className="mt-6">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold">Cart Total</h2>
            <div className="flex-grow h-px ml-4 bg-light-silver"></div>
          </div>
          <div className="space-y-2 text-gray-800">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€ 178.34</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping cost</span>
              <span>€ 178.34</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (21%)</span>
              <span>€ 178.34</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>€ 178.34</span>
            </div>
          </div>
        </div>

        {/* Onay Kutusu ve Ödeme Butonu */}
        <div className="mt-4">
          <label className="flex items-center space-x-2 text-gray-600">
            <input type="checkbox" />
            <span>
              I confirm that I have read and accepted the terms and conditions
              before proceeding with payment.
            </span>
          </label>
          <button className="mt-4 w-full bg-green text-sm text-white py-2 rounded-lg font-semibold">
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
}
