export default function AccountPage() {
    return (
        <div className="container mx-auto p-6">
            <div className="mb-6">
                <p className="text-[#A5A5A5] text-sm"> ALL YOUR ACCOUNT DETAILS</p>
                <h3 className="text-3xl font-bold uppercase mt-4">my account</h3>
                <p className="text-[#A5A5A5] mt-5">
                    Access your account to manage personal information, track orders, and more.
                </p>
            </div>

            {/*Ana Kutu */}

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                {/*Left */}
                <div className="hidden xl:flex flex-col pr-4 py-8">
                    <div className="text-black text-md font-semibold uppercase">my account</div>
                    <div className="w-full h-2.5 bg-green rounded-10 mt-6"></div>
                    <div className="flex flex-col mt-8">
                        <a href="#" className="flex items-center py-4 justify-between group effect-hover border-b border-t">
                            <div className="text-base uppercase font-semibold group-hover:text-green transition-all transform duration-300 ease-in-out">my information</div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="group-hover:text-green transition-all transform duration-300 ease-in-out" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </a>
                        <a className="flex items-center py-4 justify-between group effect-hover border-b">
                            <div className="text-base uppercase font-semibold group-hover:text-green transition-all transform duration-300 ease-in-out false">my orders</div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="group-hover:text-green transition-all transform duration-300 ease-in-out" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>                                                                                   
                        </a>
                        <a className="flex items-center py-4 justify-between group effect-hover border-b">
                            <div className="text-base uppercase font-semibold group-hover:text-green transition-all transform duration-300 ease-in-out false">my addresses</div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="group-hover:text-green transition-all transform duration-300 ease-in-out" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>                                                                                   
                            
                        </a>
                    </div>
                </div>
            </div>


        </div>

    )
}