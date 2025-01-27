import React from "react";
import Image from "next/image";

export default function Address() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-5">
      {/* Sol Bölüm - Adres Formu */}
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg">
        <div className="flex items-center mb-4">
          <h2 className="text-4xl font-bold text-black uppercase">Your Addresses</h2>
          <div className="flex-grow h-px ml-4 bg-light-silver"></div>
        </div>

        <form className="space-y-4">
          <div className="flex items-center">
            <h3 className="font-semibold text-base text-black uppercase">Delivery Address</h3>
            <div className="flex-grow h-px ml-4 bg-light-silver"></div>
          </div>

          {/* Form Alanları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-base text-black">Name *</label>
              <input type="text" className="border p-2 border-cool-gray rounded w-full" />
            </div>
            <div>
              <label className="block text-base font-medium text-black ">Last name *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">Company name</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">Address line *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">House number *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">Postcode *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">City *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">Country *</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">Your Email *</label>
              <input type="email" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-base text-black">Your Phone *</label>
              <input type="tel" className="border border-cool-gray p-2 rounded w-full" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-base text-black">Your VAT number</label>
              <input type="text" className="border border-cool-gray p-2 rounded w-full" />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-black font-semibold text-lg mb-5">Billing address</h2>

            <h2 className="text-base text-black mb-3">Is the same as your delivery address by default?</h2>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-base text-black ">Enter a different billing address</span>
            </label>
          </div>
        </form>

        {/* Payment Method Bölümü */}
        <div className="mt-8">
          <h2 className="text-4xl font-bold uppercase text-black">Payment Method</h2>
          <p className="text-black text-sm mt-2">Selected payment method</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center justify-center w-32 h-16  rounded-lg p-2 relative">
              <Image src="/images/Banktransfer.png" alt="Bank Transfer" width={107} height={107} />
            </div>
            <div className="flex items-center justify-center w-32 h-16 p-2 relative">
              <Image src="/images/Securepayment.png" alt="Secure Payment" width={107} height={107} />
            </div>
          </div>
          <p className="text-sm text-gray mt-4">
            The bank transfer information will be provided once the order is confirmed.
          </p>
        </div>
      </div>

      {/* Sağ Bölüm - Ürün Listesi ve Sepet Özeti */}
      <div className="w-full md:w-1/2 bg-white shadow-md p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <h2 className="text-4xl font-bold uppercase text-black">Your Products</h2>
          <div className="flex-grow h-px ml-4 bg-light-silver"></div>
        </div>

        {/* Ürün Listesi */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4">
              <img src="/images/tire-image.png" alt="Product Image" className="h-16 w-16" />
              <div className="flex-1">
                <h3 className="font-semibold text-base text-black">Hankook</h3>
                <p className="text-black text-sm font-bold">Maxxis Mecotra 3</p>
                <p className="text-medium-gray text-sm font-bold">Description: 215/55R18 99V</p>
                <p className="text-medium-gray text-sm font-bold">Season: Summer</p>
                <hr className="border border-cool-gray"></hr>
              </div>
              <p className="text-base text-black font-semibold">1 x € 109,94</p>
            </div>
          ))}
        </div>

        {/* Sepet Özeti */}
        <div className="mt-6">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-black">Cart Total</h2>
            <div className="flex-grow h-px ml-4 bg-light-silver"></div>
          </div>
          <div className="space-y-6 text-gray">
            <div className="flex justify-between">
              <span className=" text-black text-base">Subtotal</span>
              <span className="text-black font-semibold text-base">€ 178.34</span>
            </div>
            <hr className="border border-cool-gray my-4"></hr>
            <div className="flex justify-between">
              <span className=" text-black text-base">Shipping cost</span>
              <span className="text-black font-semibold text-base">€ 178.34</span>
            </div>
            <hr className="border border-cool-gray my-4"></hr>
            <div className="flex justify-between">
              <span className=" text-black text-base">VAT (21%)</span>
              <span className="text-black font-semibold text-base">€ 178.34</span>
            </div>
            <hr className="border border-cool-gray my-4"></hr>
            <div className="flex justify-between font-bold">
              <span className=" text-black text-base">Total</span>
              <span className="text-black font-semibold text-base">€ 178.34</span>
            </div>
            <hr className="border border-cool-gray my-4"></hr>
          </div>
        </div>

        {/* Onay Kutusu ve Ödeme Butonu */}
        <div className="mt-4">
          <label className="flex items-start text-gray-600">
            <input type="checkbox" className="mt-1" />
            <span className="text-gray text-base ml-3">
              I confirm that I have read and accepted the terms and conditions before
              <br />
              proceeding with payment, acknowledging my understanding and agreement
              <br />
              with them
            </span>
          </label>
          <div className="flex justify-end">
            <button className="mt-4 bg-green text-sm text-white py-4 px-10 rounded-lg font-semibold ">
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
