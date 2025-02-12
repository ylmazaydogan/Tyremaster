import Image from "next/image";

const PaymentMethod = () => {
    return (
        <div className="mt-7">
          <h2 className="text-4xl font-bold uppercase text-black">Payment Method</h2>
          
          <p className="text-black text-sm mt-0.5">Selected payment method</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center justify-center w-32 h-16  rounded-lg p-2 relative">
              <Image src="/images/Banktransfer.png" alt="Bank Transfer" width={107} height={107} />
            </div>
            <div className="flex items-center justify-center w-32 h-16 p-2 relative">
              <Image src="/images/Securepayment.png" alt="Secure Payment" width={107} height={107} />
            </div>
          </div>
          <p className="text-sm text-gray mt-4">
            The bank transfer information will be provided once the order is confirmed.
          </p>
        </div>
    );
};

export default PaymentMethod;