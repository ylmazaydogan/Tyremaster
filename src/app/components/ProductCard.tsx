import { FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="border-b py-4 text-left">
      {/* Headers */}
      <div className="flex items-start justify-between text-[#171A1F] -mb-10 ">
        <div className="w-1/3"></div>
        <div className="w-1/6 text-center font-semibold">Unit price</div>
        <div className="w-1/6 text-center font-semibold">Quantity</div>
        <div className="w-1/6 text-center font-semibold">Total</div>
        <div className="w-1/6 text-center font-semibold">VAT Rate</div>
      </div>

      {/* Product Details */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start w-1/3">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/tire-image.png"
              alt="Tire Image"
              width={100}
              height={100}
              className="mx-auto lg:mx-0"
            />
            <div>
              <h2 className="font-semibold text-[#171A1F] text-lg">Hankook</h2>
              <p className="text-lg text-[#171A1F]">Maxxis Mecotra 3</p>
              <p className="text-sm text-[#A5A5A5] ">Description: 215/55R18 99V</p>
              <p className="text-sm text-[#A5A5A5]">Season: Summer</p>
            </div>
          </div>
          <button className="mt-2 pl-28 flex items-center text-green bg-[#F7F7F7]"> {/* Button moved below image and details */}
            X REMOVE
          </button>
        </div>

        <div className="w-1/6 text-center">
          <p className="font-semibold">€109,94</p>
        </div>

        <div className="w-1/6 flex items-center justify-center">
          <button className="px-2 py-1 border border-gray-300 rounded-l">-</button>
          <input
            type="text"
            value="1"
            className="w-12 text-center border-t border-b border-gray-300"
            readOnly
          />
          <button className="px-2 py-1 border border-gray-300 rounded-r">+</button>
        </div>

        <div className="w-1/6 text-center">
          <p className="font-semibold">€109,94</p>
        </div>

        <div className="w-1/6 text-center">
          <p className="font-semibold">21%</p>
        </div>
      </div>
    </div>
  );
}
