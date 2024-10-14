import Image from 'next/image';

export default function PaymentMethod() {
  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">PAYMENT METHOD</h2>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600">Selected payment method</p>

      {/* Payment Options */}
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center justify-center w-32 h-16 border-2 border-blue-400 rounded-lg p-2">
          <Image src="images/SecurePayment.png" alt="Bank Transfer" width={60} height={30} />
        </div>
        <div className="flex items-center justify-center w-32 h-16 p-2">
          <Image src="/path/to/secure-payments-logo.png" alt="Secure Payments" width={60} height={30} />
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-500">
        The bank transfer information will be provided once the order is confirmed.
      </p>
    </div>
  );
}
