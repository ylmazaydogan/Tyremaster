import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-black w-full ">
            <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 w-full mx-auto mt-">
                <div className="grid xl:grid-cols-2 xl:gap-2 mx-auto xl:w-full">
                    <div className="flex flex-col ml-14 mt-9">
                        <a href="#"
                            className="self-center xl:self-start flex items-center mt-5">
                            <Image
                                src="/images/tyremasteryeni.jpg"
                                alt="TyreMaster Logo"
                                width={208}
                                height={120}
                                className="mb-1"
                            />
                        </a>
                        <p className="text-white mt-10 xl:mt-2 text-sm md:text-center xl:text-start ">
                            "Your premier tyre wholesaler platform,"
                            <br />
                            "where sourcing your tyre needs for supply "
                            <br />
                            "is made easy."
                        </p>
                        <div className="flex flex-col gap-2 mt-5 text-base text-white ">
                            <a href="https://www.google.com/maps/place?q=Patersstraat%20100%202300%20Turnhout%2C%20BE" target="_blank" className="flex gap-2 items-center group">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="text-white text-md group-hover:text-green" height="1em" width="1em">
                                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                                </svg>
                                Patersstraat 100 2300 Turnhout, BE
                            </a>
                            <a href="tel:+32456661560" className="flex gap-2 items-center group">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="text-white text-lg group-hover:text-green" height="1em" width="1em">
                                    <path d="M160 32c-16 0-32 16-32 32v384c0 16 16 32 32 32h192c16 0 32-16 32-32V64c0-16-16-32-32-32H160zm21.68 23h96v18h-96V55zM304 55h32v18h-32V55zM154 96h204v320H154V96zm70 342h63.984c16 0 16 16 16 16v6H208v-6s0-16 16-16z"></path>
                                </svg>
                                Phone: +32 (0) 45 666 15 60
                            </a>
                            <a target="_blank" href="mailto:hello@tyremaster.app" className="flex gap-2 items-center group">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-white text-md group-hover:text-green" height="1em" width="1em">
                                    <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                                </svg>
                                Email: hello@tyremaster.app
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col ml-20 mt-12 xl:mt-0 text-left">
                        <p className="text-base font-semibold text-white uppercase mt-10">Recent Posts</p>
                        <a className="flex py-2.5 border-b gap-4 group mt-5">
                            <div className="flex flex-shrink-0 w-[75px] h-[67px] items-center rounded-12 bg-white">
                                <Image
                                    src="/images/tyremasterwheel.jpeg"
                                    alt="TyreMaster Logo"
                                    width={222}
                                    height={222}
                                    className="w-36"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-white text-sm -mt-1">The B2B tyre procurement<br></br> platform</p>
                                <span className="text-white text-sm group-hover:text-green ">Click to view</span>
                                <hr className="border-t border-gray w-full"></hr>
                            </div>
                        </a>
                        <a className="flex py-2.5 border-b gap-4">
                            <div className="flex flex-shrink-0 w-[75px] h-[67px] items-center rounded-12">
                                <Image
                                    src="/images/tyremasterwheel2.jpg"
                                    alt="TyreMaster Logo"
                                    width={222}
                                    height={222}
                                    className="w-36"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-white text-sm -mt-1">Extensive selection of premium <br /> tires</p>
                                <span className="text-white text-sm ">Click to view</span>
                                <hr className="border-t border-gray w-full"></hr>
                            </div>
                        </a>
                        <a className="flex py-2.5 border-b gap-4 group !border-none">
                            <div className="flex flex-shrink-0 w-[75px] h-[67px] items-center rounded-12 ">
                                <Image
                                    src="/images/tyremasterwheel3.jpg"
                                    alt="TyreMaster Logo"
                                    width={222}
                                    height={222}
                                    className="w-36"
                                />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <p className="font-medium text-white text-sm -mt-1 ">Get in touch with our support <br /> for assistance</p>
                                <span className="text-white text-sm group-hover:text-green">Click to contact</span>

                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-20 mt-10">
                    <div className="flex flex-col xl:flex-row  mx-auto xl:w-full justify-between">
                        <div className="flex flex-col">
                            <span className="text-base text-white font-semibold uppercase ">Company</span>
                            <div className="flex flex-col gap-4 mt-4 text-sm ">
                                <a href="#" className="text-white ">About Us</a>
                                <a href="#" className="text-white ">Terms & Conditions</a>
                                <a href="#" className="text-white ">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="flex flex-col mt-12 xl:mt-0">
                            <span className="text-base text-white font-semibold uppercase ">Useful Links</span>
                            <div className="flex flex-col gap-3 mt-4 text-sm mr-64 ">
                                <a href="#" className="text-white ">Tyre Shop</a>
                                <a href="#" className="text-white ">Contact us</a>
                                <a href="#" className="text-white ">All brands</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <p className="font-semibold  text-white text-base mx-auto xl:w-full text-center uppercase ">
                            Subscribe to our Newsletter and receive B2B offers
                        </p>
                        <span className="text-white text-sm xl:mt-0.5  mx-auto xl:w-full mt-6 text-center ">
                            There are many variations of tyres that you can find for your specific need.
                        </span>
                        <div className=" xl:w-full mx-auto">
                            <form className="flex items-center justify-center w-full h-7 mt-4">
                                <svg width="461" height="50" viewBox="0 0 461 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="460" height="49" rx="1.5" fill="white" stroke="#E8E8E8" />
                                </svg>

                                <div className="flex flex-shrink-0 w-16 h-16 items-center justify-center rounded-full bg-black ml-[-2rem]">
                                    <button
                                        className="flex items-center justify-center rounded-full group hover:bg-green transition-all duration-300 ease-in-out bg-black text-white w-12 h-12">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.969 0.600073C14.0008 0.520568 14.0086 0.433471 13.9914 0.34958C13.9742 0.26569 13.9327 0.188694 13.8722 0.128139C13.8116 0.0675844 13.7346 0.0261331 13.6507 0.00892433C13.5668 -0.00828448 13.4797 -0.000494014 13.4002 0.0313299L0.671773 5.12289H0.670898L0.275403 5.28039C0.200495 5.31027 0.135304 5.36027 0.0870311 5.42488C0.0387581 5.48948 0.00928167 5.56617 0.00185779 5.64647C-0.00556608 5.72678 0.00935154 5.80757 0.0449628 5.87993C0.0805741 5.95229 0.135493 6.0134 0.203653 6.0565L0.562399 6.284L0.563274 6.28575L4.93384 9.06647L7.71456 13.437L7.71631 13.4388L7.94381 13.7975C7.98705 13.8654 8.04819 13.9201 8.1205 13.9555C8.1928 13.9909 8.27347 14.0056 8.35362 13.9981C8.43376 13.9906 8.51029 13.9611 8.57476 13.9129C8.63924 13.8647 8.68916 13.7997 8.71904 13.7249L13.969 0.600073ZM12.3651 2.2538L5.80796 8.81097L5.61983 8.51522C5.58537 8.46095 5.53936 8.41494 5.48509 8.38047L5.18934 8.19235L11.7465 1.63518L12.7772 1.22306L12.3651 2.2538Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light-gray">
                <div className="py-0.5 mt-4 xl:mt-16 bg-light-gray">
                    <div className="flex items-center justify-between w-[92%] xl:w-[83%] mx-auto">
                        <Image
                            src="/images/TrustedSite.jpeg"
                            alt="TyreMaster Logo"
                            width={178}
                            height={70}
                            className="w-36"
                        />
                        <p className="text-sm text-gray hidden xl:flex">
                            <span className="font-semibold text-black">TYREMASTER</span>
                            "© 2024 ALL RITGH RESERVED"
                        </p>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/Banktransfer.png"
                                alt="TyreMaster Logo"
                                width={94}
                                height={94}
                                className="w-36"
                            />
                            <Image
                                src="/images/Securepayment.png"
                                alt="TyreMaster Logo"
                                width={115}
                                height={43}
                                className="w-36"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
