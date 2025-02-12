"use client";

import SendUsEmail from "@/components/contact-us/SendUsEmail";
import WelcomeSection from "@/components/contact-us/WelcomeSection";
import ContactMap from "@/components/contact-us/ContactMap";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import productsData from "@/mock-data/products.json";

const Contact = () => {
    const { faq } = productsData;

    return (
        <main className="flex-grow">
            <div className="">
                <ContactMap />
                <div className="grid lg:grid-cols-2 mx-7 lg:divide-x border-cool-gray mt-10 lg:mt-20 mb-24">
                    <SendUsEmail />
                    <WelcomeSection />
                </div>
                
                <div className=" border border-light-silver-2 rounded-st mb-14">
                    <div className="py-4 lg:py-10  terms-container">
                        <h2 className="text-2xl font-semibold mb-8 ml-5">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible>
                            {faq.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className={`min-h-[60px] my-auto ${
                                        index === faq.length - 1 ? "border-b-0" : ""
                                    }`}
                                >
                                    <AccordionTrigger className="pr-5">
                                        <div className="flex justify-between items-center pl-4">
                                            <p className="text-left w-full text-base text-black">
                                                {item.question}
                                            </p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-sm text-gray border border-light-silver-2 !pt-4 px-3 md:px-14 rounded mx-3 md:mx-14">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
