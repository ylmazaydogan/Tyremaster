import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
return(
    <section 
      className="bg-cover bg-center bg-no-repeat w-full h-[346px]"
      style={{ backgroundImage: "url('/images/tyremaster.jpeg')" }} 
    >
      <div className="w-full mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4 font arimo">
          SIMPLIFYING TYRE PROCUREMENT
        </h1>
        <p className="text-base mb-6 font-arimo">
          Your premier tyre wholesaler platform, where sourcing your tyre needs for supply is made easy.
        </p>
        <a href="#" className="px-6 py-3 bg-green text-white rounded-md hover:bg-green-600 transition text-base font-arimo">
          ORDER NOW
        </a>
      </div>
    </section>
  )
};

export default Hero;