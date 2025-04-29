import Newsletter from "@/components/home/Newsletter";
import Features from "@/components/home/Features";
import Hero from "@/components/Hero";
import AboutTyremaster from "@/components/home/AboutTyremaster";
import Brands from "@/components/home/Brands";
import HowWeWork from "@/components/home/HowWeWork";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import B2BEPlatform from "@/components/home/B2BEPlatform";
import ProductData from "@/components/ProductData";
import MethodsData from "@/components/MethodsData";
import FilterData from "@/components/FilterData";
import CheckoutData from "@/components/CheckoutData";
import { Check } from "lucide-react";
import BrandsData from "@/components/BrandsData";
import ProfileData from "@/components/ProfileData";




export default function Home() {
  return (
    <div className="text-center">
      <Hero />
      <Features />
      <B2BEPlatform />
      <AboutTyremaster />
      <ProductData />
      <MethodsData/>
      <FilterData/>
      <ProfileData/>
      <section className="py-16 bg-white">
        <WhyChooseUs />
        <HowWeWork />
        <Newsletter />
        <Brands />
      </section>
    </div>
  );
}
