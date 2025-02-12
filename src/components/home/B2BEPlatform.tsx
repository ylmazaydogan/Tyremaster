import Image from "next/image";

export default function B2BEPlatform() {
    return (<>

        <p className="text-medium-gray text-sm tracking-wide  mt-7">ORDER YOUR TYRES EASILY</p>
        <h1 className="text-black font-bold text-4xl mx-auto mt-2.5 ">B2B E-COMMERCE PLATFORM</h1>
        <p className="text-medium-gray text-base mt-2.5 ">
            Streamlined tyre procurement for wholesalers: quick, easy, efficient, and competitive.
        </p>


        <div className="container mx-auto py-12 flex flex-col md:flex-row items-center justify-between relative ">
            <div className="flex items-center space-x-4 relative ">
                <Image
                    src="/images/tyremasterpc.png"
                    alt="iMac showing the platform"
                    width={509}
                    height={488}
                    className="object-contain"
                />
                <Image
                    src="/images/iphone-x.png"
                    alt="Phone showing the platform"
                    width={250}
                    height={450}
                    className="object-contain absolute left-96 top-80 " 
                />
                  <Image
                    src="/images/imac.png"
                    alt="Phone showing the platform"
                    width={466}
                    height={313}
                    className="absolute left-2 top-5"
                />

               
              
            </div>
            


            <div className="md:w-1/2 text-left mt-8 md:mt-0">
                <p className="text-black mt-6 text-base leading-relaxed mb-6 ">
                    Experience effortless tyre procurement with our easy-to-use B2B platform. Designed for wholesalers, our site simplifies the ordering process, enabling you to efficiently browse, select, and place orders. Enjoy competitive pricing and a seamless transaction experience.
                    With competitive pricing and a wide selection of tyres, we cater to all your business needs.</p>
                <p className="text-black mt-6 text-base leading-relaxed ">Our streamlined ordering system saves you time, allowing you to focus on what matters most—growing your business. Join us today and experience the convenience of a platform designed specifically for tyre wholesalers. Simplify your procurement process and discover how easy ordering tyres can be!</p>

                <div className="flex justify-start space-x-4 mt-12">
                    <a
                        href="/register"
                        className="bg-green text-white px-6 py-3  hover:text-white transition"
                    >
                        REGISTER NOW
                    </a>
                    <a
                        href="/login"
                        className="border border-green text-green px-14 py-3 rounded-lg  transition"
                    >
                        LOGIN
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}