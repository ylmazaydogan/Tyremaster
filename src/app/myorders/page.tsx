import React from "react";
import Link from "next/link";
export default function MyAccountPage() {
  const orders = [
    {
      id: 301934,
      date: "03.10.2023",
      amount: "€1290,90",
      quantity: 3,
      status: "On hold",
      shipmentStatus: "Pending",
    },
    {
      id: 301934,
      date: "03.10.2023",
      amount: "€1290,90",
      quantity: 3,
      status: "Processing",
      shipmentStatus: "Pending",
    },
    {
      id: 301934,
      date: "03.10.2023",
      amount: "€1290,90",
      quantity: 3,
      status: "Completed",
      shipmentStatus: "Shipped",
    },
    {
      id: 301934,
      date: "03.10.2023",
      amount: "€1290,90",
      quantity: 3,
      status: "Completed",
      shipmentStatus: "Shipped",
    },
  ];
  return (
    <div className="min-h-screen">

      <div className="md:border-b border-light-silver-2 relative h-fit">
        <div className="flex flex-col py-6 lg:py-0 lg:pt-8 lg:pb-11 responsive relative z-10">
          <span className="text-sm lg:text-base uppercase text-gray">all your account details</span>
          <h2 className="text-2xl lg:text-4xl font-semibold mt-2 uppercase text-black">my account</h2>
          <p className="text-sm lg:text-base uppercase text-gray">access your account to manaage personel information, track orders, and more.</p>
        </div>
      </div>


      <div className=" py-10 px-4 mx-8">
        <div className="flex space-x-9 ">
          {/* Left Menu*/}
          <div className="hidden xl:flex flex-col p-12 w-1/6 bg-white border border-light-silver-2 rounded-st h-fit">
            <div className="text-black font-semibold uppercase mb-3 text-base">MY ACCOUNT</div>

            <div className="w-full h-2 bg-green rounded mb-6"></div>
            <div className="flex flex-col space-y-5">
              <Link href="/myinformation" className="flex items-center font-semibold text-black hover:text-green text-xs-custom">
                <span className="flex-grow">MY INFORMATION</span>
                <span className="text-black ml-4">
                  <svg className='-ml-5' width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.24116 4.575L6.24201 4.57568C6.36965 4.67833 6.45764 4.82171 6.45764 5C6.45764 5.17829 6.36965 5.32167 6.24201 5.42433L6.24116 5.425L1.65116 9.0837C1.53828 9.20479 1.38568 9.25 1.23386 9.25C1.07056 9.25 0.919588 9.19922 0.791804 9.09646C0.674286 9.00195 0.576172 8.86604 0.576172 8.68852C0.576172 8.51101 0.674286 8.3751 0.791804 8.28059L4.87104 5L0.791805 1.71941C0.674287 1.6249 0.576173 1.489 0.576173 1.31148C0.576173 1.13396 0.674287 0.998055 0.791805 0.903545C0.91959 0.800779 1.07056 0.75 1.23386 0.75C1.38568 0.75 1.53828 0.79521 1.65116 0.916304L6.24116 4.575Z" fill="#20292C" stroke="#20292C" stroke-width="0.5" />
                  </svg>
                </span>
              </Link>
              <hr className="border border-light-silver" />

              <Link href="/myorders" className="flex items-center font-semibold text-black hover:text-green text-xs-custom">
                <span className="flex-grow">MY ORDERS</span>
                <span className="text-black ml-4">
                  <svg className='-ml-5' width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.24116 4.575L6.24201 4.57568C6.36965 4.67833 6.45764 4.82171 6.45764 5C6.45764 5.17829 6.36965 5.32167 6.24201 5.42433L6.24116 5.425L1.65116 9.0837C1.53828 9.20479 1.38568 9.25 1.23386 9.25C1.07056 9.25 0.919588 9.19922 0.791804 9.09646C0.674286 9.00195 0.576172 8.86604 0.576172 8.68852C0.576172 8.51101 0.674286 8.3751 0.791804 8.28059L4.87104 5L0.791805 1.71941C0.674287 1.6249 0.576173 1.489 0.576173 1.31148C0.576173 1.13396 0.674287 0.998055 0.791805 0.903545C0.91959 0.800779 1.07056 0.75 1.23386 0.75C1.38568 0.75 1.53828 0.79521 1.65116 0.916304L6.24116 4.575Z" fill="#20292C" stroke="#20292C" stroke-width="0.5" />
                  </svg>
                </span>
              </Link>
              <hr className="border border-light-silver" />

              <Link href="/checkout" className="flex items-center font-semibold text-black hover:text-green text-xs-custom">
                <span className="flex-grow">ADDRESSES</span>
                <span className="text-black ml-4">
                  <svg className='-ml-5' width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.24116 4.575L6.24201 4.57568C6.36965 4.67833 6.45764 4.82171 6.45764 5C6.45764 5.17829 6.36965 5.32167 6.24201 5.42433L6.24116 5.425L1.65116 9.0837C1.53828 9.20479 1.38568 9.25 1.23386 9.25C1.07056 9.25 0.919588 9.19922 0.791804 9.09646C0.674286 9.00195 0.576172 8.86604 0.576172 8.68852C0.576172 8.51101 0.674286 8.3751 0.791804 8.28059L4.87104 5L0.791805 1.71941C0.674287 1.6249 0.576173 1.489 0.576173 1.31148C0.576173 1.13396 0.674287 0.998055 0.791805 0.903545C0.91959 0.800779 1.07056 0.75 1.23386 0.75C1.38568 0.75 1.53828 0.79521 1.65116 0.916304L6.24116 4.575Z" fill="#20292C" stroke="#20292C" stroke-width="0.5" />
                  </svg>
                </span>
              </Link>
              <hr className="border border-light-silver" />

              <Link href="/mypassword" className="flex items-center font-semibold text-black hover:text-green text-xs-custom">
                <span className="flex-grow">CHANGE PASSWORD</span>
                <span className="text-black ml-4">
                  <svg className='-ml-5' width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.24116 4.575L6.24201 4.57568C6.36965 4.67833 6.45764 4.82171 6.45764 5C6.45764 5.17829 6.36965 5.32167 6.24201 5.42433L6.24116 5.425L1.65116 9.0837C1.53828 9.20479 1.38568 9.25 1.23386 9.25C1.07056 9.25 0.919588 9.19922 0.791804 9.09646C0.674286 9.00195 0.576172 8.86604 0.576172 8.68852C0.576172 8.51101 0.674286 8.3751 0.791804 8.28059L4.87104 5L0.791805 1.71941C0.674287 1.6249 0.576173 1.489 0.576173 1.31148C0.576173 1.13396 0.674287 0.998055 0.791805 0.903545C0.91959 0.800779 1.07056 0.75 1.23386 0.75C1.38568 0.75 1.53828 0.79521 1.65116 0.916304L6.24116 4.575Z" fill="#20292C" stroke="#20292C" stroke-width="0.5" />
                  </svg>
                </span>
              </Link>
              <hr className="border border-light-silver" />
            </div>

            <button className="flex items-center justify-center w-full mt-5 bg-black text-white py-3 rounded-md font-semibold text-sm">
              <span></span>
              <span>LOGOUT</span>
            </button>
          </div>


          <div className="w-3/4">
            <div className="bg-white border border-light-silver rounded-st p-10 ">
              <div className="flex items-center">
                <h2 className="text-4xl text-black font-bold uppercase">My Orders</h2>
                <hr className="flex-grow border-t border-light-silver-2" />
              </div>


              
                {orders.map((order) => (
                  <div key={order.id} className="border-b border-cool-gray pb-4">
                    <div className="flex justify-between items-center mb-4">
                      
                    </div>
                    <table className="w-full text-left">
                      <thead className="text-sm text-black text-center">
                        <tr>
                          <th className="p-2 font-bold">Order ID</th>
                          <th className="p-2 font-bold">Order Date</th>
                          <th className="p-2 font-bold">Order Amount</th>
                          <th className="p-2 font-bold">Quantity</th>
                          <th className="p-2 font-bold">Order Status</th>
                          <th className="p-2 font-bold">Shipment Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-sm text-black text-center">
                          <td className="p-2">{order.id}</td>
                          <td className="p-2">{order.date}</td>
                          <td className="p-2">{order.amount}</td>
                          <td className="p-2">{order.quantity}</td>
                          <td className="p-2">{order.status}</td>
                          <td className="p-2">{order.shipmentStatus}</td>
                          <button className="w-11 h-11 rounded-full flex items-center justify-center border border-gray hover:bg-gray ml-8">
                            <svg 
                                width="10" 
                                height="7" 
                                viewBox="0 0 10 7" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M5.41091 5.59245L5.41014 5.59325C5.30185 5.70643 5.16182 5.77322 5 5.77322C4.83818 5.77322 4.69815 5.70643 4.58986 5.59325L4.58909 5.59245L0.931545 1.73568C0.805401 1.63625 0.75 1.49308 0.75 1.34267C0.75 1.18423 0.809511 1.04307 0.917726 0.929967C1.0184 0.824752 1.15108 0.75 1.31148 0.75C1.47187 0.75 1.60455 0.824752 1.70522 0.929967L5 4.37346L8.29478 0.929967C8.39545 0.824752 8.52813 0.75 8.68852 0.75C8.84892 0.75 8.9816 0.824752 9.08227 0.929968C9.19049 1.04307 9.25 1.18423 9.25 1.34267C9.25 1.49308 9.1946 1.63625 9.06845 1.73568L5.41091 5.59245Z" 
                                    fill="#20292C" 
                                    stroke="#20292C" 
                                    stroke-width="0.5" 
                                />
                            </svg>
                          </button>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              


              <div className="bg-white p-10 rounded-st border border-light-silver-2">
                <h3 className="text-base font-semibold mb-4 uppercase">Order Details</h3>


                <div className="space-y-4">
                  {[1, 2].map((item, index, array) => (
                    <div key={item} className="bg-white p-5 rounded-st border-b border-cool-gray -space-y-6">
                      <div className="flex items-start justify-between text-black mb-2">
                        <div className="w-1/3"></div>
                        <div className="w-1/6 text-center font-semibold text-sm">Unit price</div>
                        <div className="w-1/6 text-center font-semibold text-sm">Quantity</div>
                        <div className="w-1/6 text-center font-semibold text-sm">Total</div>
                        <div className="w-1/6 text-center font-semibold text-sm">VAT Rate</div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-1/3 flex items-center space-x-4">
                          <img
                            src="/images/tire-image.png"
                            alt="Product Image"
                            className="h-16 w-16"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-base">Hankook</h3>
                            <p className="text-sm text-black font-semibold">Maxxis Mecotra 3</p>
                            <p className="text-sm text-medium-gray">Description: 215/55R18 99V</p>
                            <p className="text-sm text-medium-gray">Season: Summer</p>
                          </div>
                        </div>

                        <div className="w-1/6 text-center">
                          <p className="text-sm">€109,94</p>
                        </div>
                        <div className="w-1/6 text-center">
                          <p className="text-sm">1</p>
                        </div>
                        <div className="w-1/6 text-center">
                          <p className="text-sm">€109,94</p>
                        </div>
                        <div className="w-1/6 text-center">
                          <p className="text-sm">21%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sepet Özeti */}
                <div className="mt-9">
                  <div className="flex justify-end">
                    <div className="w-1/2 space-y-6 pr-24">
                      <div className="flex justify-between items-center border-b border-cool-gray pb-5">
                        <p className="text-black text-sm font-medium">Subtotal</p>
                        <p className="text-black text-sm">€ 178.34</p>
                      </div>

                      <div className="flex justify-between items-center border-b border-cool-gray pb-5">
                        <p className="text-black text-sm font-medium">Shipping cost</p>
                        <p className="text-black text-sm">€ 15.00</p>
                      </div>

                      <div className="flex justify-between items-center border-b border-cool-gray pb-5">
                        <p className="text-black text-sm font-medium">VAT (21%)</p>
                        <p className="text-black text-sm">€ 37.50</p>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <p className="text-black font-bold text-base">Total</p>
                        <p className="text-black font-bold text-base">€ 178.84</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start mt-10">
                    <button className="bg-green text-white px-9 py-4 rounded-lg text-xs-custom font-bold uppercase">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}