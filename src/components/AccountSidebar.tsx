"use client"    



import Link from 'next/link';


export default function AccountSidebar() {
    return (
        <div className="hidden xl:flex flex-col p-12 w-1/6 bg-white border border-light-silver rounded-st h-fit">
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
                <span className="mr-2">🔒</span> Logout
            </button>
        </div>
    );
} 