export default function CartTotal() {
    return (
      <div>
        <h2 className="text-4xl font-bold mb-11 ">CART TOTAL</h2>
  
        <div className="space-y-7">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>€178.34</span>
          </div>
          <hr className="my-4 border-gray-300"></hr>
  
          <div className="flex justify-between">
            <span>Shipping cost</span>
            <span>€178.34</span>
          </div>
          <hr className="my-4 border-gray-300"></hr>
  
          <div className="flex justify-between">
            <span>VAT (21%)</span>
            <span>€178.34</span>
          </div>
  
          <div className="flex justify-between font-semibold text-lg border-t pt-4">
            <span>Total</span>
            <span>€178.34</span>
          </div>
                <hr className="my-4 border-gray-300"></hr>


        </div>
            <div className="flex">
        <button className="  mt-6  bg-green-500 text-white py-5 px-24 rounded-lg font-bold ml-auto">
          CHECKOUT
        </button>
        </div>
      </div>
    );
  }
  