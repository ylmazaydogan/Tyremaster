import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex flex-col w-full">


            <div className="bg-gray-100 py-2 border-b border-gray-300">
                <div className="container mx-auto flex justify-between items-center text-sm text-gray-600">
                    <div className="flex space-x-6">
                        <a href="mailto:hello@tyremaster.app" className="flex items-center">
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V2.217L8 6.417L15 2.217V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2ZM15 3.383L10.292 6.208L15 9.105V3.383ZM14.966 10.259L9.326 6.788L8 7.583L6.674 6.788L1.034 10.258C1.09083 10.4708 1.21632 10.6589 1.39099 10.7931C1.56566 10.9272 1.77975 11 2 11H14C14.2201 11 14.4341 10.9274 14.6088 10.7934C14.7834 10.6595 14.909 10.4716 14.966 10.259ZM1 9.105L5.708 6.208L1 3.383V9.105Z" fill="#171A1F" />
                            </svg>


                            <span>E-mail: hello@tyremaster.app</span>
                        </a>

                        <div className="border-l border-gray-300 h-6"></div>


                        <a href="tel:+31612345678" className="flex items-center">
                            <span>Tel: +31 6 12 34 56 78</span>
                            
                        </a>


                        <div className="border-l border-gray-300 h-6"></div>



                        <a href="#" className="flex items-center">
                            <span>We are available on WhatsApp!</span>
                        </a>
                    </div>
                    <div className="flex  items-center space-x-2">
                        <a href="#" className=" hover:text-gray-900">NEWSLETTER</a>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V2.217L8 6.417L15 2.217V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2ZM15 3.383L10.292 6.208L15 9.105V3.383ZM14.966 10.259L9.326 6.788L8 7.583L6.674 6.788L1.034 10.258C1.09083 10.4708 1.21632 10.6589 1.39099 10.7931C1.56566 10.9272 1.77975 11 2 11H14C14.2201 11 14.4341 10.9274 14.6088 10.7934C14.7834 10.6595 14.909 10.4716 14.966 10.259ZM1 9.105L5.708 6.208L1 3.383V9.105Z" fill="#171A1F" />
                            </svg>


                        <div className="border-l border-gray-300 h-6"></div>
                        <a href="#" className="hover:text-gray-900">FAQS</a>
                    </div>
                </div>
            </div>

            <div className="bg-white py-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/images/tyremaster1.png"
                            alt="TyreMaster Logo"
                            width={202}
                            height={94}
                            className="w-36"
                        />
                    </div>


                    <div className="flex-1 max-w-lg">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                    </div>


                    <div className="flex items-center justify-end space-x-4">
                        <a href="#" className="flex items-center space-x-2 text-gray-700">
                            <span className="px-4 py-2 border border-gray-300 rounded-md">
                                LOGIN / REGISTER
                            </span>
                        </a>
                    </div>
                </div>


                <nav className="container mx-auto mt-4 flex justify-between items-center">
                    <ul className="flex space-x-8 text-[#171A1F]">
                        <li>
                            <a href="#" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700">
                                TYRES CATALOG
                            </a>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-black border-b-2 border-transparent hover:border-green-500 transition duration-300 font-semibold">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className="hover:text-gray-900 border-b-2 border-transparent hover:border-green-500 transition duration-300 font-semibold">
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-900 border-b-2 border-transparent hover:border-green-500 transition duration-300 font-semibold">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-900 border-b-2 border-transparent hover:border-green-500 transition duration-300 font-bold">
                                CONTACT US
                            </Link>
                        </li>
                    </ul>


                    <Link href="/ecommerce" className="w-[200px] h-[40px] bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 transition flex justify-center items-center">
                        E-COMMERCE
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;