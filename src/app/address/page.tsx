import React from "react";
import AddressForm from "@/components/address/AddressForm";
import ProductList from "@/components/address/ProductList";

export default function Address() {
  return (
    <div className="flex flex-col md:flex-row p-11 gap-5 border border-light-silver-2">
        <AddressForm />
        <ProductList />
    </div>
  );
}
