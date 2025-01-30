import Image from "next/image";

export default function RecentPost() {
    return (
        <div className="flex flex-col ml-20 mt-12 xl:mt-0 text-left">
            <RecenPostHeader/>
            <RecentPostItem/>
            <RecentPostItem2/>
            <RecentPostItem3/>



        </div>
    )
}

const RecenPostHeader = () => {
    return (
        <p className="text-base font-semibold text-white uppercase mt-10">Recent Posts</p> //42px

    )
}

const RecentPostItem = () => {
    return (
        <a className="flex py-2.5 border-b gap-3.5 group mt-5">
            <div className="flex flex-shrink-0 w-[75px] h-[67px] items-center rounded-12 ">
                <Image
                    src="/images/tyremasterwheel.jpeg"
                    alt="TyreMaster Logo"
                    width={222}
                    height={222}
                    className="w-36"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-sm ">The B2B tyre procurement platform</p>
                <span className="text-white text-sm group-hover:text-green  mt-2.5">Click to view</span>
                <div className="border-t border-light-silver-2 w-full"></div>
            </div>
        </a>
    )
}

const RecentPostItem2 = () => {
    return (
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
                <p className="text-white text-sm">Extensive selection of premium  tires</p>
                <span className="text-white text-sm mt-2.5 ">Click to view</span>
                <div className="border-t border-light-silver-2 w-full"></div>
            </div>
        </a>
    )
}

const RecentPostItem3 = () => {
    return (
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
            <div className="flex flex-col gap-2 mb-3 ">
                <p className="font-medium text-white text-sm ">Get in touch with our support for assistance</p>
                <span className="text-white text-sm group-hover:text-green mt-2.5">Click to contact</span>

            </div>
        </a>
    )
}