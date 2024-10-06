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
                            <span>E-mail: hello@tyremaster.app</span>
                        </a>
                        <a href="tel:+31612345678" className="flex items-center">
                            <span>Tel: +31 6 12 34 56 78</span>
                        </a>
                        <a href="#" className="flex items-center">
                            <span>We are available on WhatsApp!</span>
                        </a>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gray-900">NEWSLETTER</a>
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

                {/* Menü */}
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

export default Header;
