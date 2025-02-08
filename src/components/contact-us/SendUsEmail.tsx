import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SendUsEmail = () => {
    return (
        <form className="grid lg:grid-cols-2 gap-4 lg:gap-5 lg:pr-10">
                        <div className="flex gap-6 items-center col-span-full pl-9">
                            <span className="text-black font-semibold -mt-2 uppercase flex flex-shrink-0 text-lg lg:text-4xl ">
                                SEND US AN EMAIL
                            </span>
                            <hr className="border-cool-gray bg-light-silver w-full h-[1px]" />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base text-black">Your Name</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none  pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base text-black">Your Email</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none  pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base text-black">Phone Number</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none  pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="gap-1 flex flex-col pl-9">
                            <label className="text-base">Company</label>
                            <input
                                className="border border-cool-gray placeholder:text-gray outline-none  pl-5 text-base placeholder:text-base h-11"
                            />
                        </div>

                        <div className="flex flex-col gap-1 col-span-full pl-9">
                            <label className="text-base text-black ">Your Message</label>
                            <Textarea
                                className="border border-cool-gray placeholder:text-gray rounded-none pl-5 pt-3 text-base placeholder:text-base resize-none h-56 outline-none"
                            />
                        </div>

                        <div className="justify-self-center text-white col-span-full lg:justify-self-start pl-9 ">
                            <Button className="bg-green text-white w-40 xl:w-52 h-12 uppercase rounded-none">
                                ask a question
                            </Button>
                        </div>
                    </form>
    );
};

export default SendUsEmail;