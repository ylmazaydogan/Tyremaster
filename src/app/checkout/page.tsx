import React from "react";
import AddressForm from "@/components/checkout/AddressForm";
import ProductList from "@/components/checkout/ProductList";
import ShopBanner from "@/components/shop/ShopBanner";

export default function Address() {
  return (
    <>
      <ShopBanner
        title="CHECKOUT"
        subtitle="COMPLETE YOUR INFORMATION"
        description="Please proceed to checkout, where you will be provided with bank transfer information upon order confirmation."
      />
      
      <div className="flex flex-col md:flex-row mt-3.5 gap-5">
        <AddressForm />
        <ProductList />
      </div>
    </>
  );
}
