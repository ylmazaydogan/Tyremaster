import ContactForm from "./ContactForm";

const WelcomeSection = () => {
    return (
        <div className="flex flex-col lg:pl-16 mt-10 lg:mt-0 border-cool-gray">
                        <div className="flex gap-6 items-center">
                            <span className="text-black font-semibold uppercase flex flex-shrink-0 text-4xl lg:text-4xl">
                                WELCOME
                            </span>
                            <hr className="border border-cool-gray w-full h-[1px]" />
                        </div>

                        <p className="text-base text-black mt-6 leading-8 ">
                            As a B2B procurement platform specializing in tyres, we&apos;re here to provide <br></br> swift and efficient support for all your inquiries and needs. Whether you&apos;re a<br></br> tire retailer, distributor, or manufacturer, your satisfaction and success are our<br></br> top priorities. Whether you have inquiries about our products, need<br></br> assistance with your orders, or simply want to explore potential<br></br> collaborations, we&apos;re here to assist you every step of the way.
                        </p>

                        <ContactForm />
                        <hr className="border-t border-light-silver-2 mt-10" />
                        <div className="mt-9 mb-6">
                            <p className="text-base font-semibold text-black">Do you have questions about how we can help your company?</p>
                            <p className="text-green text-base">Send us an email and we’ll get in touch shortly.</p>
                        </div>
                    </div>
    );
};

export default WelcomeSection;