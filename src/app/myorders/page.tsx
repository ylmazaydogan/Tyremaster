import React from "react";

export default function MyAccountPage() {
  return (
    <div className=" min-h-screen">
      {/* My Account Başlık Bölümü */}
      <div className=" py-9 px-4 shadow-md mb-6 ml-10">
        <div className="container mx-auto">
          <p className="font-lato text-sm text-medium-gray mt-2">ALL YOUR ACCOUNT DETAILS</p>
          <h1 className="text-4xl font-bold uppercase text-black mt-2 font-poppins">My Account</h1>
          <p className="text-gray text-base font-lato">
            Access your account to manage personal information, track orders, and more.
          </p>
        </div>
      </div>

    
      <div className="mx-auto py-10 px-4">
        <div className="flex space-x-8">
          {/* Sol Menü */}
          <div className="hidden xl:flex flex-col p-6 w-full xl:w-1/6 bg-white border-l border-r border-light-silver rounded-lg shadow-sm">
            <div className="text-black font-semibold uppercase mb-6 font-montserrat text-base">
              MY ACCOUNT
            </div>
            <div className="w-full h-2 bg-green rounded mb-6"></div>

            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center justify-between py-2 font-semibold font-lato text-black hover:text-green text-xs-custom transition">
                MY INFORMATION
                <span className="ml-2">&#x25B6;</span> 
              </a>
              <hr className="border border-light-silver" />

              <a href="#" className="flex items-center justify-between py-2 font-semibold font-lato text-black hover:text-green text-xs-custom transition relative">
                MY ORDERS
                <span className="ml-2">&#x25B6;</span>
                <div className="absolute left-0 bottom-0 w-full h-1 bg-green"></div> 
              </a>
              <hr className="border border-light-silver" />

              <a href="#" className="flex items-center justify-between py-2 font-semibold font-lato text-black hover:text-green text-xs-custom transition">
                CHANGE PASSWORD
                <span className="ml-2">&#x25B6;</span> 
              </a>
            </div>

            <button className="flex items-center justify-center w-full mt-8 bg-black text-white py-3 rounded-md font-semibold text-sm">
              <span className="mr-2">🔒</span> Logout
            </button>
          </div>

         
          <div className="w-3/4">
            <div className="bg-white p-8 shadow-md rounded-lg space-y-5">
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl text-black font-poppins font-bold uppercase">My Orders</h2>
                <hr className="flex-grow border-t border-cool-gray" /> {/* Düzgün hizalanmış hr */}
              </div>

          
              <div className="space-y-4 ml-7">
                {[1, 2, 3, 4].map((order, index) => (
                  <div key={index} className="border-b border-cool-gray pb-4">
                    <div className="flex justify-between items-center mb-4">
                      <button
                        className={`h-10 w-10 flex items-center justify-center rounded-full ${index === 3 ? "bg-green-500" : "bg-gray-200"
                          }`}
                      >
                        <span className="text-white text-xl">&#x25BC;</span>
                      </button>
                    </div>
                    <table className="w-full text-left">
                      <thead className="font-poppins text-sm text-black">
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
                        <tr className="font-poppins text-sm text-black">
                          <td className="p-2">301934</td>
                          <td className="p-2">03.10.2023</td>
                          <td className="p-2">€ 1280,90</td>
                          <td className="p-2">3</td>
                          <td className="p-2">On hold</td>
                          <td className="p-2">Pending</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>

             
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-base font-bold mb-4 font-montserrat">Order Details</h3>

               
                <div className="space-y-4">
                  {[1, 2].map((item) => (
                    <div key={item} className="bg-white p-4 rounded-lg shadow-md">
                      
                      <div className="flex items-start justify-between text-black mb-2">
                        <div className="w-1/4"></div>
                        <div className="w-1/3 text-center font-semibold font-poppins text-sm">Unit price</div>
                        <div className="w-1/6 text-center font-semibold font-poppins text-sm ">Quantity</div>
                        <div className="w-1/6 text-center font-semibold font-poppins text-sm">Total</div>
                        <div className="w-1/6 text-center font-semibold font-poppins text-sm">VAT Rate</div>
                      </div>

            
                      <div className="flex items-center space-x-4">
                        <img
                          src="/images/tire-image.png"
                          alt="Product Image"
                          className="h-16 w-16"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-black text-base font-poppins">Hankook</h3>
                          <p className="text-sm text-black font-semibold font-poppins">Maxxis Mecotra 3</p>
                          <p className="text-sm text-medium-gray font-lato">Description: 215/55R18 99V</p>
                          <p className="text-sm text-medium-gray font-lato">Season: Summer</p>
                        </div>

                        <div className="w-1/6 text-center">
                          <p className="text-sm font-poppins">€109,94</p>
                        </div>
                        <div className="w-1/6 text-center ">
                          <p className="text-sm font-poppins ml-40">1</p>
                        </div>
                        <div className="w-1/6 text-center">
                          <p className="text-sm font-poppins ml-20">€109,94</p>
                        </div>
                        <div className="w-1/6 text-center">
                          <p className="text-sm font-poppins">21%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sepet Özeti */}
                <div className="mt-9 flex justify-end"> 
                  <div className="w-full  space-y-7  "> 
                    <div className="flex justify-between font-poppins text-sm font-bold ml-80">
                      <p className="text-black ">Subtotal</p>
                      <p className="text-black ">€ 178.34</p>
                     
                    </div>
                    <hr className="border border-cool-gray"></hr>
                    <div className="flex justify-between font-poppins text-sm font-bold ml-80">
                      <p className="text-black ">Shipping cost</p>
                      <p className="text-black ">€ 15.00</p>
                    </div>
                    <hr className="border border-cool-gray"></hr>
                    <div className="flex justify-between font-poppins text-sm font-bold ml-80">
                      <p className="text-black font-bold">VAT (21%)</p>
                      <p className="text-black font-bold">€ 37.50</p>
                    </div>
                    
                    <div className="flex justify-between border-t-2 border-cool-gray mt-4 pt-4 ml-80 ">
                      <p className="text-black font-bold text-lg">Total</p>
                      <p className="text-black font-bold text-lg">€ 178.84</p>
                    </div>
                    <div className="flex justify-start ">
                    <button className="bg-green text-white px-9 py-4 rounded-lg font-lato text-xs-custom font-bold uppercase">
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