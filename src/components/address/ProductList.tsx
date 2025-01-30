import CartSummary from "./CartSummary";
import TermsCheckBox from "./TermsCheckBox";
import AddressSection from "./AddressSection";

const ProductList = () => {
    return (
        <div className="w-full md:w-1/2 shadow-md p-3 rounded-st">
            <AddressSection title="Your Products"/>
        {/* Ürün Listesi */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4 ">
              <img src="/images/tire-image.png" alt="Product Image" className="h-16 w-16" />
              <div className="flex-1 mt-4 ">
                <h3 className="font-semibold text-base text-black">Hankook</h3>
                <p className="text-black text-sm font-bold">Maxxis Mecotra 3</p>
                <p className="text-medium-gray text-sm font-bold">Description: 215/55R18 99V</p>
                <p className="text-medium-gray text-sm font-bold">Season: Summer</p>
                <hr className="border border-cool-gray mb-1"></hr>
              </div>
              <p className="text-base text-black font-semibold">1 x € 109,94</p>
            </div>
          ))}
        </div>
        {/* Sepet Özeti */}
        <CartSummary /> 
        {/* Onay Kutusu ve Ödeme Butonu */}
        <TermsCheckBox/>
      </div>
    );
};

export default ProductList;