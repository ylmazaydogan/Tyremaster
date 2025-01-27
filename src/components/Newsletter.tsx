const Newsletter = () => {
    return (
        <div className="flex flex-col gap-8 mt-16 items-center relative">

            <div className="flex items-center flex-col gap-4 w-[65%] mx-auto">
                <p className="text-sm text-medium-gray uppercase">DON'T MISS ANY OFFER!</p>
                <p className="text-black text-4xl font-semibold uppercase text-center leading-tight mt-4">
                    SUBSCRIBE TO NEWSLETTER
                </p>

                <p className="text-center text-gray text-xl leading-relaxed w-[60%] mx-auto mt-4">
                    Enter your email address below to stay updated on our latest offers and receive our exclusive B2B deals directly to your inbox every day.
                    Find everything you need for your business procurement right here!
                </p>

            </div>



            <div className="flex shadow-lg p-2 w-full md:w-1/2 mx-auto bg-white mt-10  ">
                <input
                    type="email"
                    placeholder="Type your email address"
                    className="w-full px-6 py-4 text-gray bg-transparent outline-none rounded-none"
                />

                <button className="bg-black text-white p-4 rounded-none ml-4 hover:bg-gray-800 transition-colors">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9664 0.600073C15.0005 0.520568 15.0089 0.433471 14.9904 0.34958C14.972 0.26569 14.9276 0.188694 14.8627 0.128139C14.7978 0.0675844 14.7153 0.0261331 14.6255 0.00892433C14.5356 -0.00828448 14.4423 -0.000494014 14.3571 0.0313299L0.71974 5.12289H0.718803L0.295068 5.28039C0.214811 5.31027 0.144966 5.36027 0.0932456 5.42488C0.0415256 5.48948 0.00994443 5.56617 0.00199045 5.64647C-0.00596353 5.72678 0.0100193 5.80757 0.0481734 5.87993C0.0863275 5.95229 0.145168 6.0134 0.218195 6.0565L0.602557 6.284L0.603494 6.28575L5.28614 9.06647L8.26542 13.437L8.26729 13.4388L8.51103 13.7975C8.55736 13.8654 8.62287 13.9201 8.70034 13.9555C8.77781 13.9909 8.86423 14.0056 8.95011 13.9981C9.03598 13.9906 9.11796 13.9611 9.18704 13.9129C9.25612 13.8647 9.30961 13.7997 9.34163 13.7249L14.9664 0.600073ZM13.2481 2.2538L6.22267 8.81097L6.02112 8.51522C5.98419 8.46095 5.9349 8.41494 5.87675 8.38047L5.55988 8.19235L12.5853 1.63518L13.6896 1.22306L13.2481 2.2538Z" fill="white" />
                    </svg>


                </button>

            </div>




            <div className="absolute right-52 -bottom-9 flex space-x-4 bg-white ">
                {/* <img
                    src="/images/tyremasterpc2.jpg"
                    alt="Mobile view"
                    className="w-[533px] h-[320px]"
                /> */}
            </div>

            <div className="w-full border-t border-cool-gray mt-10"></div>
        </div>

    );
};

export default Newsletter;
