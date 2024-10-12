import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <main className="flex-grow">
            <div className="container mx-auto">

                <div className="grid lg:grid-cols-2 lg:divide-x border-cool-gray mt-10 lg:mt-20">
                    <form className="grid lg:grid-cols-2 gap-4 lg:gap-5 lg:pr-10">
                        <div className="flex gap-6 items-center col-span-full pl-9">
                            <span className="text-black font-semibold uppercase flex flex-shrink-0 text-lg lg:text-4xl font-arimo">
                                SEND US AN EMAIL
                            </span>
                            <hr className="border-cool-gray bg-light-silver w-full h-[1px]" />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base font-arimo text-black">Your Name</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none rounded-lg pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base font-arimo text-black">Your Email</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none rounded-lg pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base font-arimo text-black">Phone Number</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none rounded-lg pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base">Company</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none rounded-lg pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="flex flex-col gap-1 col-span-full pl-9">
                            <label className="text-base text-black font-arimo">Your Message</label>
                            <Textarea
                                className="border border-cool-gray placeholder:text-gray rounded-lg pl-5 pt-3 text-base placeholder:text-base resize-none h-56 outline-none"
                            />
                        </div>

                        <div className="justify-self-center col-span-full lg:justify-self-start pl-9">
                            <Button className="bg-green text-white w-40 xl:w-52 h-12 uppercase">
                                ask a question
                            </Button>
                        </div>
                    </form>

                    <div className="flex flex-col lg:pl-16 mt-10 lg:mt-0 border-cool-gray">
                        <div className="flex gap-6 items-center">
                            <span className="text-black font-semibold font-arimo uppercase flex flex-shrink-0 text-lg lg:text-4xl">
                                welcome
                            </span>
                            <hr className="border border-cool-gray w-full h-[1px]" />
                        </div>

                        <p className="text-base text-black text-justify mt-2.5">
                            As a B2B procurement platform specializing in tyres, we're here to provide
                            swift and efficient support for all your inquiries and needs. Whether you're a
                            tire retailer, distributor, or manufacturer, your satisfaction and success are our
                            top priorities. Whether you have inquiries about our products, need
                            assistance with your orders, or simply want to explore potential
                            collaborations, we're here to assist you every step of the way.
                        </p>

                        <div className="flex gap-6 items-center mt-8">
                            <span className="text-black font-semibold uppercase flex flex-shrink-0 text-lg lg:text-4xl font-arimo">contact us</span>
                            <hr className="border border-cool-gray w-full h-[1px]" />
                        </div>

                        <div className="grid place-content-center sm:grid-cols-2 gap-y-6 xl:gap-x-16 2xl:gap-x-0 mt-2">
                            {/* Add any additional elements here */}
                        </div>

                        <div className="border border-cool-gray mt-16 2xl:pt-7 mb-16">
                            <p className="text-base font-semibold font-arimo">Do you have questions about how we can help your company?</p>
                            <p className="text-green font-arimo text-base">Send us an email and we’ll get in touch shortly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
