import Image from "next/image";

const AboutTyremaster = () => {
    return (
        <section className="py-16 bg-white  border-y border-light-silver-2 mt-40">
            <div className=" mx-auto responsive px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-medium-gray text-sm mt-2 ">WHO WE ARE?</p>
                    <h2 className="text-4xl font-bold text-black mt-2.5 ">ABOUT TYREMASTER</h2>
                    <p className="text-gray text-base mt-2.5 ">
                        There are many variations of tyres that you can find for your specific need.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between mt-12">
                    <div className=" md:w-1/2 ml-12 pt-14 text-justify ">
                        <h3 className="text-base font-bold text-black  mb-9 ">
                            WE ARE TYREMASTER, YOUR TIRE SOURCING PLATFORM
                        </h3>
                        <p className="text-base text-black leading-8">
                            Tyre Master, your premier destination for tyres procurement in Europe. Enjoy Welcome to a tire distribution experience you can rely on.
                        </p>
                        <p className="text-base text-black leading-8">
                            Tyremaster is the seasoned European tyre sourcing platform with strong industry expertise. We proudly offer a vast catalog of over 50,000 tyre references, serving businesses across all European regions with bulk sales capabilities. Trust in our experience and comprehensive inventory to meet your wholesale tire needs efficiently and reliably.
                        </p>

                        <div className="flex justify-start mt-10">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-[210px] h-[52px] bg-green text-white text-base transition"
                            >
                                LEARN MORE
                            </a>
                          
                        </div>
                        
                    </div>
                    
                   

                    <div className="md:w-1/2 mt-24 md:mt-0 flex justify-center ml-48 ">
                        <Image
                            src="/images/tyremasterabout.png"
                            alt="Tyremaster Office"
                            width={606}
                            height={404}
                            className="rounded-st shadow-lg mt-10 mb-4"
                        />
                        
                    </div>
                   
                </div>
                
            </div>
            
        </section>
        
    );
};

export default AboutTyremaster; 