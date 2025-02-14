export default function Newsletter() {
    return (
        <div className="flex flex-col w-full">
            <p className="font-semibold   text-white text-base uppercase mt-12 ">
                Subscribe to our Newsletter and receive B2B offers
            </p>
            <span className="text-white text-sm xl:mt-0.5 xl:w-full">
                There are many variations of tyres that you can find for your specific need.
            </span>

            <form className="flex place-items-center mt-3 mr-16">
                <div className="flex w-full max-w-full relative -mr-1">
                    <input
                        type="email"
                        placeholder="Type your email address"
                        className="w-full h-[50px] px-6 py-4 text-gray bg-white outline-none rounded-st"
                    />
                </div>
                <div className="bg-white w-3 h-6">

                </div>
                <button
                    className="flex mt-auto items-center -ml-1 justify-center border-[7px] border-white rounded-full group hover:bg-green transition-all duration-300 ease-in-out bg-black text-white w-12 h-12">
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
            </form>

        </div>
    )
}
