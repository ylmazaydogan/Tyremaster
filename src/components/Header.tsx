
import React, { } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';



const Header = () => {



    return (
        <header className="flex flex-col w-full mx-auto ">
            <div className="bg-light-gray py-2">
                <div className="flex justify-between items-center text-sm text-gray mx-10">
                    <div className="flex space-x-2">
                        <div className='border-l border-light-silver-2'></div>
                        <a href="mailto:hello@tyremaster.app" className="flex items-center h-6">

                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2">
                                <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V2.217L8 6.417L15 2.217V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2ZM15 3.383L10.292 6.208L15 9.105V3.383ZM14.966 10.259L9.326 6.788L8 7.583L6.674 6.788L1.034 10.258C1.09083 10.4708 1.21632 10.6589 1.39099 10.7931C1.56566 10.9272 1.77975 11 2 11H14C14.2201 11 14.4341 10.9274 14.6088 10.7934C14.7834 10.6595 14.909 10.4716 14.966 10.259ZM1 9.105L5.708 6.208L1 3.383V9.105Z" fill="#171A1F" />
                            </svg>
                            <span className='text-xs text-black border-r border-light-silver-2 pr-1.5'>E-mail: hello@tyremaster.app</span>

                        </a>

                        <div className="border-l border-light-gray"></div>

                        <a href="tel:+31612345678" className="flex items-center ">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2">
                                <path d="M2.74079 0.996197C2.69651 0.939244 2.64063 0.892363 2.57684 0.858669C2.51306 0.824974 2.44283 0.805237 2.37083 0.800768C2.29884 0.796299 2.22671 0.807201 2.15925 0.832749C2.09179 0.858297 2.03053 0.897907 1.97955 0.948948L1.20407 1.72518C0.841833 2.08817 0.708336 2.60191 0.866582 3.05265C1.52411 4.91793 2.59241 6.61162 3.99251 8.00853C5.38942 9.40863 7.0831 10.4769 8.94838 11.1344C9.39912 11.2927 9.91286 11.1592 10.2759 10.797L11.0513 10.0215C11.1024 9.9705 11.142 9.90925 11.1675 9.84178C11.1931 9.77432 11.204 9.7022 11.1995 9.6302C11.195 9.5582 11.1753 9.48797 11.1416 9.42419C11.1079 9.3604 11.061 9.30452 11.0041 9.26025L9.27388 7.91478C9.21298 7.86768 9.14221 7.83499 9.06688 7.81914C8.99154 7.8033 8.9136 7.80471 8.83889 7.82328L7.19643 8.23352C6.97717 8.28794 6.74758 8.28485 6.52988 8.22454C6.31217 8.16424 6.11371 8.04876 5.95371 7.88928L4.11175 6.04657C3.95214 5.88665 3.83652 5.68823 3.77608 5.47051C3.71564 5.2528 3.71243 5.02317 3.76676 4.80385L4.17775 3.16139C4.19632 3.08668 4.19773 3.00874 4.18189 2.93341C4.16604 2.85807 4.13335 2.7873 4.08625 2.7264L2.74079 0.996197ZM1.41332 0.383462C1.54456 0.252177 1.70223 0.150315 1.87586 0.0846401C2.04949 0.0189648 2.23511 -0.00902097 2.42038 0.00254096C2.60565 0.0141029 2.78635 0.064948 2.95047 0.1517C3.11458 0.238452 3.25837 0.359126 3.37227 0.505709L4.71774 2.23517C4.96448 2.55241 5.05148 2.96565 4.95398 3.35564L4.54374 4.9981C4.52268 5.08318 4.5239 5.17225 4.54728 5.25672C4.57067 5.34119 4.61542 5.4182 4.67724 5.48034L6.51994 7.32304C6.58215 7.38498 6.6593 7.42981 6.74391 7.4532C6.82853 7.47659 6.91774 7.47774 7.00293 7.45654L8.64464 7.0463C8.83712 6.99846 9.03794 6.99486 9.232 7.03578C9.42607 7.0767 9.60834 7.16106 9.76511 7.28254L11.4946 8.62801C12.1163 9.11175 12.1733 10.0305 11.6168 10.5862L10.8413 11.3617C10.2864 11.9167 9.45687 12.1604 8.68364 11.8882C6.70419 11.1926 4.90714 10.0595 3.42627 8.57326C1.94009 7.09261 0.806997 5.29582 0.11135 3.31664C-0.160143 2.54416 0.0836012 1.71393 0.638588 1.15894L1.41332 0.383462Z" fill="#171A1F" />
                            </svg>

                            <span className='text-xs text-black pr-1.5 '>Tel: +31 6 12 34 56 78</span>
                            <div className="border-r border-light-silver-2 h-6 ml-1.5"></div>
                        </a>

                        <div className="border-l border-light-gray h-6"></div>

                        <a href="#" className="flex items-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2" >
                                <path d="M11.9008 2.03529C11.2591 1.38735 10.4948 0.873685 9.65247 0.524254C8.81014 0.174822 7.90665 -0.00337821 6.99473 4.84968e-05C3.17361 4.84968e-05 0.0594998 3.11329 0.0559998 6.93527C0.0559998 8.1594 0.376249 9.35027 0.980872 10.4046L0 14L3.67849 13.0358C4.69566 13.5907 5.83602 13.8811 6.99473 13.8801H6.99823C10.8202 13.8801 13.9335 10.7669 13.937 6.9414C13.9377 6.02971 13.7582 5.12686 13.4086 4.28486C13.059 3.44285 12.5471 2.67832 11.9008 2.03529ZM6.99473 12.7059C5.96151 12.7051 4.94743 12.4271 4.05824 11.9009L3.84824 11.7749L1.66599 12.3471L2.24874 10.2183L2.11224 9.99864C1.53458 9.08018 1.22906 8.01679 1.23112 6.93177C1.23112 3.75904 3.81849 1.17079 6.99823 1.17079C7.75575 1.16944 8.50604 1.31803 9.20586 1.60802C9.90568 1.89801 10.5412 2.32366 11.0757 2.86041C11.612 3.39517 12.0372 4.03076 12.3267 4.73057C12.6162 5.43038 12.7644 6.18056 12.7627 6.9379C12.7592 10.122 10.1718 12.7059 6.99473 12.7059ZM10.1578 8.38864C9.98547 8.30202 9.13409 7.8829 8.97397 7.8234C8.81472 7.76652 8.69835 7.73677 8.5846 7.91002C8.46822 8.0824 8.13572 8.47527 8.03597 8.58814C7.93622 8.70452 7.83297 8.71764 7.65972 8.63189C7.48735 8.54439 6.92823 8.3624 6.26673 7.77002C5.75048 7.31065 5.40486 6.7419 5.30161 6.56953C5.20186 6.39628 5.29198 6.30353 5.37861 6.2169C5.45473 6.1399 5.55098 6.0139 5.63761 5.91415C5.72511 5.8144 5.75398 5.7409 5.81085 5.6254C5.86773 5.50815 5.8406 5.4084 5.79773 5.32178C5.75398 5.23516 5.40836 4.38028 5.26223 4.03553C5.12223 3.69516 4.97961 3.74241 4.87286 3.73804C4.77311 3.73191 4.65673 3.73191 4.54036 3.73191C4.45249 3.73415 4.36602 3.7545 4.28638 3.79169C4.20673 3.82887 4.13562 3.8821 4.07749 3.94804C3.91824 4.12128 3.47286 4.54041 3.47286 5.39528C3.47286 6.25015 4.09411 7.07177 4.18161 7.18815C4.26736 7.30452 5.40136 9.05364 7.14173 9.80614C7.55297 9.98551 7.87672 10.0914 8.1296 10.1719C8.54522 10.3049 8.92059 10.2848 9.21984 10.2419C9.55234 10.1911 10.2445 9.82189 10.3906 9.41677C10.5341 9.01077 10.5341 8.66427 10.4903 8.59164C10.4475 8.51814 10.3311 8.47527 10.1578 8.38864Z" fill="#171A1F" />

                            </svg>

                            <span className='text-xs text-black'>We are available on WhatsApp!</span>
                        </a>
                    </div>
                    <div className="flex items-center justify-end space-x-2 border-light-gray">

                        <div className="flex items-center space-x-3">
                            <div className="border-r border-white h-6"></div>
                            <div className="flex items-center space-x-2">
                                
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className='text-black'>
                                    <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V2.217L8 6.417L15 2.217V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2ZM15 3.383L10.292 6.208L15 9.105V3.383ZM14.966 10.259L9.326 6.788L8 7.583L6.674 6.788L1.034 10.258C1.09083 10.4708 1.21632 10.6589 1.39099 10.7931C1.56566 10.9272 1.77975 11 2 11H14C14.2201 11 14.4341 10.9274 14.6088 10.7934C14.7834 10.6595 14.909 10.4716 14.966 10.259ZM1 9.105L5.708 6.208L1 3.383V9.105Z" fill="#171A1F" />
                                </svg>
                                <a href="#newsletter" className="hover:text-gray text-black text-xs ">NEWSLETTER</a>
                            </div>
                            <div className="border-r border-light-silver-2 h-6"></div>
                            <a href="#faq" className="hover:text-gray text-black text-xs ">FAQS</a>
                            <div className="border-r border-light-silver-2 h-6"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white pt-4 border-y border-light-silver-2">
                <div className=" mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4 mx-10">
                        <Link href="/">
                            <img
                                src="/images/tyremaster1.png"
                                alt="TyreMaster Logo"
                                width="202"
                                height="94"
                                className="w-[202px] h-[94px] object-contain"
                            />
                        </Link>
                    </div>


                    <SearchBar />


                    <div className="flex items-center justify-end mt-5 mx-10 mb-1.5">

                        <a href="/login" className="flex items-center space-x-8">
                            <span className="flex items-center px-4 py-2 border border-light-silver rounded-md space-x-4">



                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="42" height="42" rx="4" fill="#171A1F" />
                                    <svg x="11" y="11" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.75 7.5C13.75 8.49456 13.3549 9.44839 12.6517 10.1517C11.9484 10.8549 10.9946 11.25 10 11.25C9.00544 11.25 8.05161 10.8549 7.34835 10.1517C6.64509 9.44839 6.25 8.49456 6.25 7.5C6.25 6.50544 6.64509 5.55161 7.34835 4.84835C8.05161 4.14509 9.00544 3.75 10 3.75C10.9946 3.75 11.9484 4.14509 12.6517 4.84835C13.3549 5.55161 13.75 6.50544 13.75 7.5Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 7.34783 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34783 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34783 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM10 1.25C8.35222 1.25009 6.73796 1.71545 5.343 2.59253C3.94805 3.46962 2.8291 4.72276 2.11496 6.20774C1.40081 7.69272 1.12048 9.34917 1.30625 10.9864C1.49201 12.6237 2.13632 14.1753 3.165 15.4625C4.0525 14.0325 6.00625 12.5 10 12.5C13.9937 12.5 15.9463 14.0313 16.835 15.4625C17.8637 14.1753 18.508 12.6237 18.6938 10.9864C18.8795 9.34917 18.5992 7.69272 17.885 6.20774C17.1709 4.72276 16.052 3.46962 14.657 2.59253C13.262 1.71545 11.6478 1.25009 10 1.25Z" fill="white" />
                                    </svg>

                                </svg>



                                <span className='text-sm font-semibold'>LOGIN / REGISTER</span>
                            </span>
                        </a>
                    </div>

                </div>

                <div className="w-full border-t border-light-silver-2"></div>
                <nav className="mx-10 flex justify-between py-1.5 items-center place-items-center ">
                    <ul className="flex space-x-8 text-black items-center">
                        <li>
                            <a
                                href="#"
                                className="w-[160px] h-[40px] bg-black text-white rounded-st flex items-center justify-center  text-sm font-semibold  mr-3 "
                            >
                                TYRES CATALOG
                            </a>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-black border-b-2 border-transparent hover:border-green transition duration-300 font-semibold">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className="hover:text-gray-900 border-b-2 border-transparent hover:border-green transition duration-300 font-semibold">
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="hover:text-gray-900 border-b-2 border-transparent hover:border-green transition duration-300 font-semibold">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className="hover:text-gray-900 border-b-2 border-transparent hover:border-green transition duration-300 font-bold">
                                CONTACT US
                            </Link>
                        </li>
                    </ul>

                    <Link href="/cart" className="w-[200px] h-[40px] bg-green text-white rounded-md  hover:bg-green transition flex justify-center items-center">
                        VIEW CART
                        <p className='pl-6'>23</p>
                    </Link>
                </nav>
            </div>
        </header >
    );
};

export default Header;
