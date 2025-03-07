import CartSummary from "./CartSummary";
import TermsCheckBox from "./TermsCheckBox";
import AddressSection from "./AddressSection";
import Terms from "@/app/terms-conditions/page";

const ProductList = () => {
    return (
        <div className="flex flex-col w-full md:w-1/2">
            <div className="p-12 rounded-st border-y border-x border-r-0 border-light-silver-2">
                <AddressSection title="Your Products"/>
            
                <div className="space-y-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex justify-between items-center p-4 border-b border-cool-gray">
                            <div className="flex items-center space-x-5">
                                <img src="/images/tire-image.png" alt="Product Image" className="h-16 w-16" />
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-base text-black">Hankook</h3>
                                    <p className="text-black text-sm font-bold">Maxxis Mecotra 3</p>
                                    <p className="text-medium-gray text-sm font-bold">Description: 215/55R18 99V</p>
                                    <p className="text-medium-gray text-sm font-bold">Season: Summer</p>
                                </div>
                            </div>
                            <p className="text-base text-black font-semibold ml-10 text-right mr-4">1 x € 109,94</p>
                        </div>
                    ))}
                    <CartSummary /> 
                </div>
            </div>

            <div className="mt-2 mx-auto ml-1.5">
                <TermsCheckBox />
            </div>
        </div>


    );
};

export default ProductList;
