import { FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className=" border-light-silver-2 rounded-st my-2 p-3 text-left">
      {/* Headers */}
      <div className="flex items-start justify-between text-black">
        <div className="w-1/3"></div>
        <div className="w-1/6 text-center font-semibold text-sm">Unit price</div>
        <div className="w-1/6 text-center font-semibold text-sm">Quantity</div>
        <div className="w-1/6 text-center font-semibold text-sm">Total</div>
        <div className="w-1/6 text-center font-semibold text-sm">VAT Rate</div>
      </div>

      {/* Product Details */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start w-1/3">
          <div className="flex items-center space-x-4">
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
          <button className="mt-1 flex items-center text-black bg-light-gray text-xs border-light-silver px-3 py-1 ml-9 rounded font-bold">
            {/* Button content */}
          </button>
        </div>

        {/* Unit Price */}
        <div className="w-1/6 text-center mb-6">
          <p className="text-sm">€109,94</p>
        </div>

        {/* Quantity */}
        <div className="w-1/6 flex items-center justify-center mb-6">
          <button className="px-2 py-1 border border-light-gray rounded-st">-</button>
          <input
            type="text"
            value="1"
            className="w-12 text-center border-t border-b text-sm border-light-gray"
            readOnly
          />
          <button className="px-2 py-1 border border-light-gray rounded-st">+</button>
        </div>

        {/* Total */}
        <div className="w-1/6 text-center mb-6">
          <p className="font-semibold text-sm">€109,94</p>
        </div>

        {/* VAT Rate */}
        <div className="w-1/6 text-center mb-6">
          <p className="text-sm">21%</p>
        </div>
      </div>
    </div>
  );
}