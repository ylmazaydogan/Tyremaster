"use client";
import AccountSidebar from "@/components/AccountSidebar";
import { useRouter } from "next/navigation";

export default function MyInformation() {
    const router = useRouter();

    const handleChangeClick = () => {
        router.push('/myaccount');
    };

    return (
        <main className="flex-grow">
            <div className="md:border-b border-light-silver-2 relative h-fit">
                <div className="flex flex-col py-6 lg:py-0 lg:pt-8 lg:pb-11 responsive relative z-10">
                    <span className="text-sm lg:text-base uppercase text-gray">all your account details</span>
                    <h2 className="text-2xl lg:text-4xl font-semibold mt-2 uppercase text-black">my account</h2>
                    <p className="text-sm lg:text-base uppercase text-gray">access your account to manage personal information, track orders, and more.</p>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row w-full bg-white mt-12 mb-8 ml-8">
                {/* Sidebar */}
                <AccountSidebar />

                {/* Main Content */}
                <div className="flex flex-col w-full xl:w-5/6 bg-white p-8 border border-light-silver-2 rounded-st xl:ml-8 mr-20">
                    <h4 className="font-bold text-black mb-8">Personal data</h4>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <div className="flex">
                                <span className="w-32 text-black">Name:</span>
                                <span className="text-gray">- -</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 text-black">Company name:</span>
                                <span className="text-gray">-</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 text-black">VAT number:</span>
                                <span className="text-gray">-</span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex">
                                <span className="w-32 text-black">Address:</span>
                                <span className="text-gray">- -</span>
                            </div>
                            <div className="flex">
                                <span className="w-32"></span>
                                <span className="text-gray">-</span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex">
                                <span className="w-32 text-black">Email address:</span>
                                <span className="text-gray">-</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 text-black">Phone number:</span>
                                <span className="text-gray">-</span>
                            </div>
                        </div>

                        <div>
                            <button 
                                onClick={handleChangeClick}
                                className="border border-black text-black px-12 py-3 hover:bg-black hover:text-white transition-colors"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
