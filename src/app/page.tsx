"use client";

import Newsletter from "@/components/home/Newsletter";
import Features from "@/components/home/Features";
import Hero from "@/components/Hero";
import AboutTyremaster from "@/components/home/AboutTyremaster";
import Brands from "@/components/home/Brands";
import HowWeWork from "@/components/home/HowWeWork";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import B2BEPlatform from "@/components/home/B2BEPlatform";
import { useProducts, useCartMutation, useRegisterForm } from "commaleon-shop-api";

export default function Home() {
  const { data: products, isLoading, error } = useProducts();
  return (
    <div className="text-center">
      <Hero />
      <Features />
      <B2BEPlatform />
      <AboutTyremaster />
      <section className="py-16 bg-white">
        <WhyChooseUs />
        <HowWeWork />
        <Newsletter />
        <Brands />
      </section>
    </div>
  );
}
