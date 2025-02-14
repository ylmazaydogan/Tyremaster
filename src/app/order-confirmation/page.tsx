import ShopBanner from "@/components/shop/ShopBanner"
import CartSummary from "@/components/checkout/CartSummary"
import AddressSection from "@/components/checkout/AddressSection"

export default function OrderConfirmation() {
    return (
        <div>
            <ShopBanner
                title="ORDER CONFIRMATION"
                subtitle="THANK YOU FOR YOUR ORDER"
                description="Thank you for your order! Your confirmation details have been sent to your email."
            />
            
            <div className=" mx-auto py-8 mb-60">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left */}
                    <div className="border border-light-silver-2 p-6 space-y-8">
                        <h2 className="text-4xl font-bold">THANK YOU!</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-base mb-3">DELIVERY ADDRESS</h3>
                                <div className="space-y-2 text-base font-normal">
                                    <p>Name Last Name</p>
                                    <p>Company name</p>
                                    <p>Address line 1</p>
                                    <p>00000 city</p>
                                    <p>Country</p>
                                    <p>Phone</p>
                                    <p>Email</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold mb-3 text-base">BILLING ADDRESS</h3>
                                <div className="space-y-2 font-normal text-base">
                                    <p>Name Last Name</p>
                                    <p>Company name</p>
                                    <p>Address line 1</p>
                                    <p>00000 city</p>
                                    <p>Country</p>
                                    <p>Phone</p>
                                    <p>Email</p>
                                </div>
                            </div>

                            <div className="pt-4 pb-20">
                                <h3 className="font-bold mb-3 text-4xl">PAYMENT INFORMATION</h3>
                                <p className="text-base">Your order has been received, and a bank transfer payment is requested. Our support team will contact you soon with further instructions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right and Cart Summary*/}
                    <div className="border border-light-silver-2 p-6 ">
                        <AddressSection title="YOUR PRODUCTS"/>
                    
                        <div className="space-y-6 mt-6 mx-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex justify-between items-center pb-4 border-b border-light-silver-2">
                                    <div className="flex items-center space-x-5">
                                        <img src="/images/tire-image.png" alt="Product Image" className="h-16 w-16" />
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold text-base">Hankook</h3>
                                            <p className="font-bold text-sm">Maxxis Mecotra 3</p>
                                            <p className="text-gray text-sm">Description: 215/55R18 99V</p>
                                            <p className="text-gray text-sm">Season: Summer</p>
                                        </div>
                                    </div>
                                    <p className="text-base font-semibold ml-10 text-right">1 x € 109,94</p>
                                </div>
                            ))}
                            <CartSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}