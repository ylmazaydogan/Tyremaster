import React from "react";
import AddressForm from "@/components/address/AddressForm";
import ProductList from "@/components/address/ProductList";
import ShopBanner from "@/components/shop/ShopBanner";
import TermsCheckBox from "@/components/address/TermsCheckBox";

export default function Address() {
  return (
    <>
     <ShopBanner
        title="CHECKOUT"
        subtitle="COMPLETE YOUR INFORMATION"
        description="Please proceed to checkout, where you will be provided with bank transfer information upon order confirmation."
      />
      
    <div className="flex flex-col md:flex-row mt-3.5 gap-5 ">
      
        <AddressForm />
        <ProductList />
        
    </div>
   
    
    </>
  );
}
