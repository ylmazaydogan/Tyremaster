import React from "react";

export default function MyAccountPage() {
  const orders = [
    {
      id: 1,
      date: "2024-01-15",
      amount: "€150.00",
      quantity: 2,
      status: "Shipped",
      shipmentStatus: "In Transit",
    },
    {
      id: 2,
      date: "2024-02-01",
      amount: "€200.00",
      quantity: 3,
      status: "Processing",
      shipmentStatus: "Pending",
    },
  ];
  return (
    <div className="min-h-screen">

      <div className="border-b border-cool-gray">
        <div className="mx-auto">
          <p className="text-sm text-medium-gray mt-2">ALL YOUR ACCOUNT DETAILS</p>
          <h1 className="text-4xl font-bold uppercase text-black ">My Account</h1>
          <p className="text-gray text-base ">
            Access your account to manage personal information, track orders, and more.
          </p>
        </div>
      </div>


      <div className="mx-auto py-10 px-4">
        <div className="flex space-x-8">
          {/* Sol Menü */}
          <div className="hidden xl:flex flex-col p-6 w-full xl:w-1/6 bg-white border-l border-r border-light-silver rounded-lg shadow-sm">
            <div className="text-black font-semibold uppercase mb-6 text-base">
              MY ACCOUNT
            </div>
            <div className="w-full h-2 bg-green rounded mb-6"></div>

            <div className="flex flex-col space-y-4">
              <div className="mb-6 text-left">
                <h3 className="font-semibold mb-4">FILTER BY BRAND</h3>
                <div className="relative mb-4">
                  <input type="text" placeholder="Search for brand" className="w-full p-2 border border-light-silver rounded" />
                  <button className="absolute right-2 top-2">🔍</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="all-brands" name="brand" className="mr-2" />
                    <label htmlFor="all-brands" className="text-left">All</label>
                  </div>
                  {['Brand', 'Brand', 'Brand', 'Brand'].map((brand, index) => (
                    <div key={index} className="flex items-center">
                      <input type="radio" id={`brand-${index}`} name="brand" className="mr-2" />
                      <label htmlFor={`brand-${index}`} className="text-left">{brand}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 text-left">
                <h3 className="font-semibold mb-4">FILTER BY WIDTH</h3>
                <div className="relative mb-4">
                  <input type="text" placeholder="Search for brand" className="w-full p-2 border border-light-silver rounded" />
                  <button className="absolute right-2 top-2">🔍</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="all-width" name="width" className="mr-2" />
                    <label htmlFor="all-width" className="text-left">All</label>
                  </div>
                  {['255', '265', '275', '295'].map((width, index) => (
                    <div key={index} className="flex items-center">
                      <input type="radio" id={`width-${index}`} name="width" className="mr-2" />
                      <label htmlFor={`width-${index}`} className="text-left">{width}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 text-left">
                <h3 className="font-semibold mb-4">FILTER BY DIAMETER</h3>
                <div className="relative mb-4">
                  <input type="text" placeholder="Search for brand" className="w-full p-2 border border-light-silver rounded" />
                  <button className="absolute right-2 top-2">🔍</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="all-diameter" name="diameter" className="mr-2" />
                    <label htmlFor="all-diameter" className="text-left">All</label>
                  </div>
                  {['16', '17', '18', '19'].map((diameter, index) => (
                    <div key={index} className="flex items-center">
                      <input type="radio" id={`diameter-${index}`} name="diameter" className="mr-2" />
                      <label htmlFor={`diameter-${index}`} className="text-left">{diameter}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">FILTER BY SEASON</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">☀️</span>
                    <label>Summer</label>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">❄️</span>
                    <label>Winter</label>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">❄️</span>
                    <label>All Season</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">PRODUCT STATUS</h3>
                <div className="flex items-center">
                  <input type="checkbox" id="in-stock" className="mr-2" />
                  <label htmlFor="in-stock">Only in stock</label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">FILTER BY PRICE</h3>
                <div className="flex items-center space-x-2">
                  <span>€ 0</span>
                  <input type="range" className="flex-grow" />
                  <span>€ 200</span>
                </div>
                <button className="w-full bg-black text-white py-2 rounded mt-2">FILTER</button>
              </div>
            </div>

            <button className="flex items-center justify-center w-full mt-8 bg-black text-white py-3 rounded-md font-semibold text-sm">
              <span className="mr-2">🔒</span> Logout
              <svg className="ml-auto" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="2" fill="#171A1F" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14">
                  &#x25B6;
                </text>
              </svg>
            </button>
          </div>


          <div className="w-3/4">
            <div className="bg-white p-8 shadow-md rounded-lg space-y-5">
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl text-black font-bold uppercase">My Orders</h2>
                <hr className="flex-grow border-t border-cool-gray" /> {/* Düzgün hizalanmış hr */}
              </div>


              <div className="space-y-4 ml-7">
                {orders.map((order) => (
                  <div key={order.id} className="border-b border-cool-gray pb-4">
                    <div className="flex justify-between items-center mb-4">
                      <button
                        className={`h-10 w-10 flex items-center justify-center rounded-full ${order.id === 3 ? "bg-green-500" : "bg-gray-200"
                          }`}
                      >
                        <span className="text-white text-xl">&#x25BC;</span>
                      </button>
                    </div>
                    <table className="w-full text-left">
                      <thead className="text-sm text-black">
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
                        <tr className="text-sm text-black">
                          <td className="p-2">{order.id}</td>
                          <td className="p-2">{order.date}</td>
                          <td className="p-2">{order.amount}</td>
                          <td className="p-2">{order.quantity}</td>
                          <td className="p-2">{order.status}</td>
                          <td className="p-2">{order.shipmentStatus}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>


              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-base font-bold mb-4 ">Order Details</h3>


                <div className="space-y-4">
                  {[1, 2].map((item) => (
                    <div key={item} className="bg-white p-4 rounded-lg shadow-md">

                      <div className="flex items-start justify-between text-black mb-2">
                        <div className="w-1/4"></div>
                        <div className="w-1/3 text-center font-semibold text-sm">Unit price</div>
                        <div className="w-1/6 text-center font-semibold text-sm ">Quantity</div>
                        <div className="w-1/6 text-center font-semibold text-sm">Total</div>
                        <div className="w-1/6 text-center font-semibold text-sm">VAT Rate</div>
                      </div>


                      <div className="flex items-center space-x-4">
                        <img
                          src="/images/tire-image.png"
                          alt="Product Image"
                          className="h-16 w-16"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-black text-base ">Hankook</h3>
                          <p className="text-sm text-black font-semibold ">Maxxis Mecotra 3</p>
                          <p className="text-sm text-medium-gray ">Description: 215/55R18 99V</p>
                          <p className="text-sm text-medium-gray ">Season: Summer</p>
                        </div>

                        <div className="w-1/6 text-center">
                          <p className="text-sm ">€109,94</p>
                        </div>
                        <div className="w-1/6 text-center ">
                          <p className="text-sm ml-40">1</p>
                        </div>
                        <div className="w-1/6 text-center">
                          <p className="text-sm ml-20">€109,94</p>
                        </div>
                        <div className="w-1/6 text-center">
                          <p className="text-sm ">21%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sepet Özeti */}
                <div className="mt-9 flex justify-end">
                  <div className="w-full  space-y-7  ">
                    <div className="flex justify-between text-sm font-bold ml-80">
                      <p className="text-black ">Subtotal</p>
                      <p className="text-black ">€ 178.34</p>

                    </div>
                    <hr className="border border-cool-gray"></hr>
                    <div className="flex justify-between text-sm font-bold ml-80">
                      <p className="text-black ">Shipping cost</p>
                      <p className="text-black ">€ 15.00</p>
                    </div>
                    <hr className="border border-cool-gray"></hr>
                    <div className="flex justify-between text-sm font-bold ml-80">
                      <p className="text-black font-bold">VAT (21%)</p>
                      <p className="text-black font-bold">€ 37.50</p>
                    </div>

                    <div className="flex justify-between border-t-2 border-cool-gray mt-4 pt-4 ml-80 ">
                      <p className="text-black font-bold text-lg">Total</p>
                      <p className="text-black font-bold text-lg">€ 178.84</p>
                    </div>
                    <div className="flex justify-start ">
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
    </div>
  );
}