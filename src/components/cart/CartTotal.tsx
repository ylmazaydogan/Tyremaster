export default function CartTotal() {
  return (
    
    <div className=" border-y border-x border-light-silver-2 p-7">
      <h2 className="text-4xl font-bold text-black mb-3.5">CART TOTAL</h2>

      <div className="space-y-6">
        <div className="flex justify-between text-base">
          <span>Subtotal</span>
          <span className="text-black">€178.34</span>
        </div>
        <hr className="my-3 border-cool-gray"></hr>

        <div className="flex justify-between text-base">
          <span>Shipping cost</span>
          <span className="">€178.34</span>
        </div>
        <hr className="my-3 border-cool-gray"></hr>

        <div className="flex justify-between text-base">
          <span>VAT (21%)</span>
          <span className="">€178.34</span>
        </div>

        <div className="flex justify-between font-semibold text-lg border-t pt-4">
          <span>Total</span>
          <span className="font-bold">€178.34</span>
        </div>
      </div>
      
    </div>
    
  );
}