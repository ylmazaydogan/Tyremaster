"use client";

import Link from "next/link";
import { useAuth } from "factoryx-commerce";
import { useRouter } from "next/navigation";

export default function AccountSidebar() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    signOut?.mutate(undefined, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };

  return (
    <div className="hidden xl:flex flex-col p-12 w-1/6 bg-white border border-light-silver-2 rounded-st h-fit">
      <div className="text-black font-semibold uppercase mb-3 text-base">
        MY ACCOUNT
      </div>

      <div className="w-full h-2 bg-green rounded mb-6"></div>
      <div className="flex flex-col space-y-5">
        <Link
          href="/my-information"
          className="flex items-center font-semibold text-black hover:text-green text-xs-custom"
        >
          <span className="flex-grow">MY INFORMATION</span>
          <span className="text-black ml-4">
            <svg
              className="-ml-5"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.24116 4.575L6.24201 4.57568C6.36965 4.67833 6.45764 4.82171 6.45764 5C6.45764 5.17829 6.36965 5.32167 6.24201 5.42433L6.24116 5.425L1.65116 9.0837C1.53828 9.20479 1.38568 9.25 1.23386 9.25C1.07056 9.25 0.919588 9.19922 0.791804 9.09646C0.674286 9.00195 0.576172 8.86604 0.576172 8.68852C0.576172 8.51101 0.674286 8.3751 0.791804 8.28059L4.87104 5L0.791805 1.71941C0.674287 1.6249 0.576173 1.489 0.576173 1.31148C0.576173 1.13396 0.674287 0.998055 0.791805 0.903545C0.91959 0.800779 1.07056 0.75 1.23386 0.75C1.38568 0.75 1.53828 0.79521 1.65116 0.916304L6.24116 4.575Z"
                fill="#20292C"
                stroke="#20292C"
                strokeWidth="0.5"
              />
            </svg>
          </span>
        </Link>
        <hr className="border border-light-silver" />

        <Link
          href="/myorders"
          className="flex items-center font-semibold text-black hover:text-green text-xs-custom"
        >
          <span className="flex-grow">MY ORDERS</span>
          <span className="text-black ml-4">
            <svg
              className="-ml-5"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.24116 4.575L6.24201 4.57568C6.36965 4.67833 6.45764 4.82171 6.45764 5C6.45764 5.17829 6.36965 5.32167 6.24201 5.42433L6.24116 5.425L1.65116 9.0837C1.53828 9.20479 1.38568 9.25 1.23386 9.25C1.07056 9.25 0.919588 9.19922 0.791804 9.09646C0.674286 9.00195 0.576172 8.86604 0.576172 8.68852C0.576172 8.51101 0.674286 8.3751 0.791804 8.28059L4.87104 5L0.791805 1.71941C0.674287 1.6249 0.576173 1.489 0.576173 1.31148C0.576173 1.13396 0.674287 0.998055 0.791805 0.903545C0.91959 0.800779 1.07056 0.75 1.23386 0.75C1.38568 0.75 1.53828 0.79521 1.65116 0.916304L6.24116 4.575Z"
                fill="#20292C"
                stroke="#20292C"
                strokeWidth="0.5"
              />
            </svg>
          </span>
        </Link>
        <hr className="border border-light-silver" />

        <Link
          href="/mypassword"
          className="flex items-center font-semibold text-black hover:text-green text-xs-custom"
        >
          <span className="flex-grow">CHANGE PASSWORD</span>
          <span className="text-black ml-4">
            <svg
              className="-ml-5"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.24116 4.575L6.24201 4.57568C6.36965 4.67833 6.45764 4.82171 6.45764 5C6.45764 5.17829 6.36965 5.32167 6.24201 5.42433L6.24116 5.425L1.65116 9.0837C1.53828 9.20479 1.38568 9.25 1.23386 9.25C1.07056 9.25 0.919588 9.19922 0.791804 9.09646C0.674286 9.00195 0.576172 8.86604 0.576172 8.68852C0.576172 8.51101 0.674286 8.3751 0.791804 8.28059L4.87104 5L0.791805 1.71941C0.674287 1.6249 0.576173 1.489 0.576173 1.31148C0.576173 1.13396 0.674287 0.998055 0.791805 0.903545C0.91959 0.800779 1.07056 0.75 1.23386 0.75C1.38568 0.75 1.53828 0.79521 1.65116 0.916304L6.24116 4.575Z"
                fill="#20292C"
                stroke="#20292C"
                strokeWidth="0.5"
              />
            </svg>
          </span>
        </Link>
        <hr className="border border-light-silver-2" />
      </div>

      <div className="flex items-center gap-2 mt-5">
        <div className="w-[38px] h-[38px] bg-green rounded-sm flex items-center justify-center">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="38"
              y="38"
              width="38"
              height="38"
              rx="2"
              transform="rotate(180 38 38)"
              fill="#1FCE6D"
            />
            <path
              d="M26 14.7854C26 14.3119 25.8119 13.8578 25.4771 13.5229C25.1423 13.1881 24.6881 13 24.2146 13H17.8944C17.6368 12.9999 17.3822 13.0555 17.1481 13.1631C16.9141 13.2706 16.7061 13.4276 16.5384 13.6231L12.2151 18.6686C12.0763 18.8304 12 19.0365 12 19.2497C12 19.4629 12.0763 19.6691 12.2151 19.8309L16.5384 24.8746C16.7061 25.0701 16.9141 25.227 17.1481 25.3346C17.3822 25.4421 17.6368 25.4978 17.8944 25.4977H24.2146C24.6881 25.4977 25.1423 25.3096 25.4771 24.9747C25.8119 24.6399 26 24.1858 26 23.7123V14.7854ZM17.2034 17.3331C17.1619 17.2917 17.129 17.2425 17.1065 17.1883C17.084 17.1341 17.0724 17.0761 17.0724 17.0174C17.0724 16.9588 17.0839 16.9007 17.1063 16.8465C17.1287 16.7923 17.1615 16.743 17.203 16.7015C17.2444 16.66 17.2936 16.6271 17.3478 16.6046C17.402 16.5821 17.46 16.5706 17.5187 16.5705C17.5773 16.5705 17.6354 16.582 17.6896 16.6044C17.7438 16.6268 17.7931 16.6597 17.8346 16.7011L18.3366 17.2032C19.1178 17.9843 20.3844 17.9842 21.1654 17.2028L21.6669 16.7011C21.7084 16.6597 21.7576 16.6268 21.8118 16.6044C21.866 16.582 21.9241 16.5705 21.9828 16.5705C22.0414 16.5706 22.0995 16.5821 22.1536 16.6046C22.2078 16.6271 22.257 16.66 22.2985 16.7015C22.3399 16.743 22.3728 16.7923 22.3952 16.8465C22.4176 16.9007 22.4291 16.9588 22.429 17.0174C22.429 17.0761 22.4174 17.1341 22.3949 17.1883C22.3724 17.2425 22.3395 17.2917 22.298 17.3331L21.7965 17.8346C21.0155 18.6157 21.0155 19.882 21.7965 20.663L22.298 21.1645C22.3818 21.2482 22.429 21.3618 22.429 21.4802C22.4291 21.5987 22.3822 21.7123 22.2985 21.7961C22.2148 21.8799 22.1012 21.9271 21.9828 21.9272C21.8643 21.9272 21.7507 21.8803 21.6669 21.7966L21.1654 21.2948C20.3844 20.5135 19.1178 20.5133 18.3366 21.2945L17.8346 21.7966C17.7931 21.838 17.7438 21.8709 17.6896 21.8933C17.6354 21.9157 17.5773 21.9272 17.5187 21.9272C17.46 21.9271 17.402 21.9155 17.3478 21.893C17.2936 21.8706 17.2444 21.8376 17.203 21.7961C17.1615 21.7546 17.1287 21.7054 17.1063 21.6512C17.0839 21.597 17.0724 21.5389 17.0724 21.4802C17.0725 21.3618 17.1196 21.2482 17.2034 21.1645L17.7048 20.6634C18.4863 19.8823 18.4863 18.6154 17.7048 17.8343L17.2034 17.3331Z"
              fill="white"
            />
          </svg>
        </div>
        <button
          onClick={handleLogout}
          className="flex-1 h-[38px] bg-white text-black border border-light-silver-2 font-medium text-xs-custom"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}
