import ContentSection from "./ContentSection";


const AboutContent = () => {
    const sections = [
        {

            title: "WELCOME",
            content: "TyreMaster, your dedicated destination for premium wholesale tyres in Europe. With a tireless commitment to excellence and a deep passion for the automotive industry, we've emerged as your trusted tyre wholesale partner, offering unbeatable value and unbeatable service."
        },
        {
            title: "OUR JOURNEY",
            content: "TyreMaster was founded by a team of industry experts with a collective experience spanning several decades. Our journey began with a simple yet ambitious goal - to provide professionals, garages, and businesses across Europe with access to the finest tyres at competitive prices. Over the years, we've honed our expertise, expanded our inventory, and established strong partnerships with leading tyre manufacturers."
        },
        {
            title: "WHAT DEFINES US",
            content: "At TyreMaster, it's not just about tyres; it's about delivering on your success. Our tireless pursuit of quality, a comprehensive inventory of over 10,000 references, and a commitment to competitive pricing make us your ideal wholesale tyre provider. Our streamlined ordering process, reliable deliveries, and a responsive customer service team ensure that you have a partner you can trust."
        },
        {
            title: "OUR PLEDGE",
            content: "When you choose TyreMaster, you're choosing more than a product; you're choosing a promise. We pledge to continue sourcing the best tyres, adhering to stringent quality standards, and offering pricing that allows you to thrive in your industry. Your success is our motivation, and we take that responsibility seriously;"
        },
        {
            title: "JOIN THE TYREMASTER FAMILY",
            content: "We invite you to explore the TyreMaster catalogue, request a quote, and embark on a journey with us. Be part of the growing community of satisfied professionals, garages, and businesses who have made TyreMaster their trusted tyre wholesale partner. We're here to support your every tyre need, every step of the way."
        }
    ]

    return (
        <div className="flex flex-col mt-15 responsive border border-light-silver-2 rounded-st mt-20 mb-14">
            <div className="py-4 lg:py-16 terms-container">
                <div className="flex flex-col gap-8 lg:gap-16">
                    {sections.map((section, index) => (
                        <ContentSection 
                            key={index}
                            title={section.title}
                            content={section.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutContent;