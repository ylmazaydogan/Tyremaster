const CartSummary = () => {
    return (
        <div className="flex flex-col">
            <div className="p-6">
                <div className="mt-3.5">
                    <div className="flex items-center mb-4">
                        <h2 className="text-4xl font-bold text-black">Cart Total</h2>
                        <div className="flex-grow h-px ml-4 bg-light-silver"></div>
                    </div>
                    <div className="space-y-6 text-gray">
                        <div className="flex justify-between">
                            <span className="text-black text-base">Subtotal</span>
                            <span className="text-black font-semibold text-base">€ 178.34</span>
                        </div>
                        <hr className="border border-cool-gray mt-1"></hr>
                        <div className="flex justify-between">
                            <span className="text-black text-base">Shipping cost</span>
                            <span className="text-black font-semibold text-base">€ 178.34</span>
                        </div>
                        <hr className="border border-cool-gray mt-1"></hr>
                        <div className="flex justify-between">
                            <span className="text-black text-base mt-1">VAT (21%)</span>
                            <span className="text-black font-semibold text-base">€ 178.34</span>
                        </div>
                        <hr className="border border-cool-gray mt-1"></hr>
                        <div className="flex justify-between font-bold">
                            <span className="text-black text-base">Total</span>
                            <span className="text-black font-semibold text-base">€ 178.34</span>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default CartSummary;