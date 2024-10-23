import { FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="border-light-silver my-4 py-3 text-left">
      {/* Headers */}
      <div className="flex items-start justify-between text-black -mb-10 ">
        <div className="w-1/3"></div>
        <div className="w-1/6 text-center font-semibold font-poppins text-sm">Unit price</div>
        <div className="w-1/6 text-center font-semibold font-poppins text-sm">Quantity</div>
        <div className="w-1/6 text-center font-semibold font-poppins text-sm">Total</div>
        <div className="w-1/6 text-center font-semibold font-poppins text-sm">VAT Rate</div>
      </div>

      
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
              <h2 className="font-semibold text-black text-base font-poppins">Hankook</h2>
              <p className="text-sm text-black font-poppins">Maxxis Mecotra 3</p>
              <p className="text-sm text-medium-gray font-arimo ">Description: 215/55R18 99V</p>
              <p className="text-sm text-medium-gray font-arimo">Season: Summer</p>
            </div>
          </div>
          <button className="mt-2 flex items-center text-black bg-light-gray font-lato text-xs border-light-silver px-4 py-2 ml-9 rounded font-bold "> 
            X REMOVE
          </button>
        </div>
        

        <div className="w-1/6 text-center">
          <p className=" text-sm font-poppins">€109,94</p>
        </div>

        <div className="w-1/6 flex items-center justify-center ">
          <button className="px-2 py-1 border-light-gray rounded-lg">-</button>
          <input
            type="text"
            value="1"
            className="w-12 text-center border-t border-b border-light-gray"
            readOnly
          />
          <button className="px-2 py-1 border border-light-gray rounded-r">+</button>
        </div>

        <div className="w-1/6 text-center">
          <p className="font-semibold font-poppins text-sm">€109,94</p>
        </div>

        <div className="w-1/6 text-center">
          <p className="font-semibold font-poppins text-sm">21%</p>
        </div>
      </div>
    </div>
  );
}
