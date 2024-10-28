export default function CartTotal() {
    return (
      <div>
        <h2 className="text-4xl font-bold mb-11 font-poppins text-black ">CART TOTAL</h2>
  
        <div className="space-y-7 font-poppins">
          <div className="flex justify-between text-base">
            <span>Subtotal</span>
            <span>€178.34</span>
          </div>
          <hr className="my-4 border-cool-gray"></hr>
  
          <div className="flex justify-between text-base">
            <span>Shipping cost</span>
            <span>€178.34</span>
          </div>
          <hr className="my-4 border-cool-gray"></hr>
  
          <div className="flex justify-between text-base">
            <span>VAT (21%)</span>
            <span>€178.34</span>
          </div>
  
          <div className="flex justify-between font-semibold text-lg border-t pt-4 font-poppins">
            <span>Total</span>
            <span>€178.34</span>
          </div>
          <hr className="my-4 border-cool-gray"></hr>


        </div>
            <div className="flex justify-end">
        <button className="  mt-6  bg-green text-white py-5 px-24 rounded-lg font-bold ml-auto font-lato text-sm">
          CHECKOUT
        </button>
        </div>
      </div>
    );
  }
  