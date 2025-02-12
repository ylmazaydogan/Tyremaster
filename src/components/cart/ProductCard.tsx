"use client";

import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState } from 'react';


export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 0 ? prev - 1 : 0);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    }
  };

  return (
    <div className=" border-light-silver-2 rounded-st my-1 p-3 text-left">
      {/* Headers */}
      <div className="flex items-start justify-between text-black mt-3 -mb-4">
        <div className="w-1/3 "></div>
        <div className="w-1/6 text-center font-semibold text-sm">Unit price</div>
        <div className="w-1/6 text-center font-semibold text-sm">Quantity</div>
        <div className="w-1/6 text-center font-semibold text-sm">Total</div>
        <div className="w-1/6 text-center font-semibold text-sm">VAT Rate</div>
      </div>

      {/* Product Details */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start w-1/3">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/tire-image.png"
              alt="Tire Image"
              width={44}
              height={63}
              className="mx-auto lg:mx-0"
            />
            <div className="-mt-0.5">
              <h2 className="font-bold text-black text-base">Hankook</h2>
              <p className="text-sm text-black font-bold">Maxxis Mecotra 3</p>
              <p className="text-sm text-medium-gray mt-2">Description: 215/55R18 99V</p>
              <p className="text-sm text-medium-gray">Season: Summer</p>
            </div>
          </div>
          <button className="mt-4  flex items-center text-black bg-light-gray text-xs border-light-silver py-2 px-2 ml-3 rounded-st font-bold">
            <span className="text-green mr-1">X</span>
            <span className="mx-1">|</span>
            <span className="text-black">REMOVE</span>
          </button>
        </div>

        {/* Unit Price */}
        <div className="w-1/6 text-center mb-6">
          <p className="text-sm">€109,94</p>
        </div>

        {/* Quantity */}
        <div className="w-1/6 flex flex-col items-center justify-center -mt-8 ml-3">
          <div className="flex border border-light-silver rounded-st">
            <button 
              onClick={decreaseQuantity}

              className="px-3 py-1 bg-light-gray  border-light-silver hover:bg-gray"
            >
              -
            </button>
            <input
              type="number"
              min="0"
              name="form-0-quantity"
              id="id_form-0-quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity w-9  bg-light-gray text-center focus:outline-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button 
              onClick={increaseQuantity}
              className="px-3 py-1 bg-light-gray border-light-silver hover:bg-gray"
            >
              +
            </button>
          </div>
         
        </div>

        {/* Total */}
        <div className="w-1/6 text-center mb-6">
          <p className="text-sm">€109,94</p>
        </div>

        {/* VAT Rate */}
        <div className="w-1/6 text-center mb-6">
          <p className="text-sm">21%</p>
        </div>
      </div>
    </div>
  );
}