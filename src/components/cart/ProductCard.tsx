import { FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ProductCard() {
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
        <div className="w-1/6 flex items-center justify-center mb-6">
          <button>
          <svg width="102" height="36" viewBox="0 0 102 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="102" height="36" rx="10" fill="#F7F7F7"/>
<path d="M49.7898 14.04V12.878H52.4218V23H51.1338V14.04H49.7898Z" fill="#171A1F"/>
<path d="M27.5425 17.33V18.408H21.9565V17.33H27.5425Z" fill="#171A1F"/>
<path d="M81.5797 18.422H78.5977V21.446H77.4077V18.422H74.4397V17.344H77.4077V14.306H78.5977V17.344H81.5797V18.422Z" fill="#171A1F"/>
</svg>

          </button>
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