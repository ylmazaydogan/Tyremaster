const Newsletter = () => {
    return (
        <div id="newsletter" className="flex flex-col gap-8  items-center relative">

            <div className="flex items-center flex-col gap-4 w-[65%] mx-auto">
                <p className="text-sm text-medium-gray uppercase mt-10">DON'T MISS ANY OFFER!</p>
                <p className="text-black text-4xl font-semibold uppercase text-center leading-tight mt-2.5">
                    SUBSCRIBE TO NEWSLETTER
                </p>

                <p className="text-center text-gray text-base leading-relaxed w-[60%] mx-auto mt-2">
                    Enter your email address below to stay updated on our latest offers and receive our exclusive B2B deals directly to your inbox every day.
                    Find everything you need for your business procurement right here!
                </p>

            </div>


            <div className="bg-input-gray w-3/4 mx-auto mt-7">
            <div className="flex shadow-lg  w-[750px] h-[44px] mx-auto bg-white relative ml-40 mt-2 mb-2 ">
                <div className="flex w-full relative z-10">
                    <input
                        type="email"
                        placeholder="Type your email address"
                        className=" w-[750px] h-[44px] px-14 py-0.5 text-gray bg-transparent outline-none rounded-st"
                    />
                </div>
                <button className="pl-3">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="2" fill="#171A1F" />
                        <path d="M29.9664 15.6001C30.0005 15.5206 30.0089 15.4335 29.9904 15.3496C29.972 15.2657 29.9276 15.1887 29.8627 15.1281C29.7978 15.0676 29.7153 15.0261 29.6255 15.0089C29.5356 14.9917 29.4423 14.9995 29.3571 15.0313L15.7197 20.1229H15.7188L15.2951 20.2804C15.2148 20.3103 15.145 20.3603 15.0932 20.4249C15.0415 20.4895 15.0099 20.5662 15.002 20.6465C14.994 20.7268 15.01 20.8076 15.0482 20.8799C15.0863 20.9523 15.1452 21.0134 15.2182 21.0565L15.6026 21.284L15.6035 21.2858L20.2861 24.0665L23.2654 28.437L23.2673 28.4388L23.511 28.7975C23.5574 28.8654 23.6229 28.9201 23.7003 28.9555C23.7778 28.9909 23.8642 29.0056 23.9501 28.9981C24.036 28.9906 24.118 28.9611 24.187 28.9129C24.2561 28.8647 24.3096 28.7997 24.3416 28.7249L29.9664 15.6001ZM28.2481 17.2538L21.2227 23.811L21.0211 23.5152C20.9842 23.461 20.9349 23.4149 20.8767 23.3805L20.5599 23.1924L27.5853 16.6352L28.6896 16.2231L28.2481 17.2538Z" fill="white" />
                    </svg>

                </button>
            </div>
            </div>





            <div className="absolute right-0 bottom-0 flex space-x-4 mb-8 mr-6 ">
                <div className="relative">
                    {/* Mobile image */}
                    <img
                        src="/images/newsletter-iphone.png"
                        alt="Mobile Excel view"
                        className="absolute left-0 bottom-0 h-auto z-10"
                    />
                   
                    <img
                        src="/images/newsletter-macbook.png"
                        alt="Desktop Excel view"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="w-full border-t border-cool-gray mt-10"></div>
        </div>

    );
};

export default Newsletter;
