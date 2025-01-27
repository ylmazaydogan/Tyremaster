export default function HowWeWork() {
    return (
        <div className="pb-7 border-b border-light-silver-2 mt-12 xl:mt-20">
            <div className="w-[92%] xl:w-[83%] mx-auto">
                <div className="flex items-center flex-col gap-2.5  mx-auto">
                    <p className="text-base text-medium-gray uppercase ">SEE OUR COLLECTION</p>
                    <p className="text-black text-4xl font-semibold uppercase text-center ">HOW WE WORK</p>
                    <p className="text-center text-gray text-base ">There are many variations of passages of lorem ipsum available.</p>
                </div>

                <div className="flex flex-col xl:flex-row xl:divide-x divide-[#818181]/20 mt-10 justify-center xl:space-x-12">

                    <div className="flex items-center text-left px-12">
                        <span className="text-black text-7xl xl:text-6xl font-bold mr-2 ">01.</span>
                        <div className="flex flex-col gap-2 max-w-xs">
                            <p className="text-black text-lg font-semibold ">SELECT YOUR TYRES</p>
                            <p className="text-gray text-base">Use the shop page or the product<br></br> catalog to select your tyres.</p>
                        </div>
                    </div>

                    <div className="flex items-center text-left px-12">
                        <span className="text-black text-7xl xl:text-6xl font-bold mr-2 ">02.</span>
                        <div className="flex flex-col gap-2 max-w-xs">
                            <p className="text-black text-lg font-semibold ">PLACE YOUR ORDER</p>
                            <p className=" text-gray text-base ">Directly from the checkout or<br></br> by getting in touch with us.</p>
                        </div>
                    </div>

                    <div className="flex items-center text-left px-12">
                        <span className="text-black text-7xl xl:text-6xl font-bold mr-2">03.</span>
                        <div className="flex flex-col gap-2 max-w-xs">
                            <p className="text-black text-lg font-semibold ">RECEIVE YOUR ORDER</p>
                            <p className=" text-gray text-base">Receive your B2B order once<br></br> your order is confirmed.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}