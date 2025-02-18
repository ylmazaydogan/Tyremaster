import Image from "next/image";
import TyremasterLogo from "@/components/footer/TyremasterLogo";
import RecentPost from "@/components/footer/RecentPost";
import Company from "@/components/footer/Company";
import Useful from "@/components/footer/Useful";
import Newsletter from "./footer/Newsletter";

const Footer = () => {
    return (
        <div className="bg-black w-full">
            <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 w-[92%] xl:w-[86%] mx-auto pb-10">
                <div className="grid xl:grid-cols-2 xl:gap-2 xl:w-full">
                    <TyremasterLogo />
                    <div className="-ml-12">
                        <RecentPost />
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col xl:flex-row xl:w-full justify-between">
                        <Company />
                        <Useful />
                    </div>
                   
                    <Newsletter />
                </div>
            </div>

            <div className="bg-light-gray">
                <div className="py-1 mt-4 xl:mt-2 bg-light-gray">
                    <div className="flex items-center justify-between w-[92%] xl:w-[83%] mx-auto">
                        <Image
                            src="/images/TrustedSite.jpeg"
                            alt="TyreMaster Logo"
                            width={128}
                            height={70}
                            className="mix-blend-darken"
                        />
                        <p className="text-sm text-gray hidden xl:flex">
                            <span className="font-semibold text-black">TYREMASTER</span>
                            "© 2024 ALL RITGH RESERVED"
                        </p>
                        <div className="flex items-center gap-4 ml-1">

                            <Image
                                src="/images/Securepayment.png"
                                alt="TyreMaster Logo"
                                width={115}
                                height={43}
                                className=""
                            />
                            <Image
                                src="/images/Banktransfer.png"
                                alt="TyreMaster Logo"
                                width={94}
                                height={94}
                                className=""
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
