export default function HowWeWork() {
    return (
        <div className="border-b pb-12 border-light-silver-2">
            <div className="w-[92%] xl:w-[83%] mx-auto">
                <div className="flex items-center flex-col gap-3 mx-auto text-center">
                    <p className="text-base text-medium-gray uppercase mt-8">SEE OUR COLLECTION</p>
                    <p className="text-black text-4xl font-semibold uppercase mt-0.5">HOW WE WORK</p>
                    <p className="text-center text-gray text-base mt-1">There are many variations of passages of lorem ipsum available.</p>
                </div>

                <div className="flex flex-col xl:flex-row xl:divide-x divide-light-silver-2 mt-14 justify-center xl:space-x-0 space-y-8 xl:space-y-0">
                    
                    <div className="flex items-center text-left sm:px-6 xl:px-8">
                        <span className="text-black text-6xl font-bold mr-3">01.</span>
                        <div className="flex flex-col gap-2 max-w-xs">
                            <p className="text-black text-lg font-semibold">SELECT YOUR TYRES</p>
                            <p className="text-gray text-base">Use the shop page or the product catalog to select your tyres.</p>
                        </div>
                    </div>

                    <div className="flex items-center text-left sm:px-6 xl:px-8">
                        <span className="text-black text-6xl font-bold mr-3">02.</span>
                        <div className="flex flex-col gap-2 max-w-xs">
                            <p className="text-black text-lg font-semibold">PLACE YOUR ORDER</p>
                            <p className="text-gray text-base">Directly from the checkout or by getting in touch with us.</p>
                        </div>
                    </div>

                    
                    <div className="flex items-center text-left sm:px-6 xl:px-8">
                        <span className="text-black text-6xl font-bold mr-3">03.</span>
                        <div className="flex flex-col gap-2 max-w-xs">
                            <p className="text-black text-lg font-semibold">RECEIVE YOUR ORDER</p>
                            <p className="text-gray text-base">Receive your B2B order once your order is confirmed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
