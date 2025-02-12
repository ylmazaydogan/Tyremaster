import ProductCard from '@/components/cart/ProductCard';
import CartTotal from '@/components/cart/CartTotal';
import ShopBanner from '@/components/shop/ShopBanner';

export default function Cart() {
  return (
    <div>
      <ShopBanner
        title="CART"
        subtitle="FINALISE YOUR CART"
        description="Review and refine your cart details before proceeding to checkout."
      />
      

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 mt-10">
     
        <div className="lg:col-span-2 border border-light-silver-2 rounded-st pt-7 p-20">
          <h1 className="text-black font-bold uppercase text-4xl pl-10 ">YOUR PRODUCTS</h1>
          
          <div className="divide-y divide-light-silver-2 pl-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

       
        <div className=" border-light-silver-2 bg-white pl-4 rounded-st ">
          <CartTotal />
          <div className="flex justify-end mt-3 mr-14">
        <button className="bg-green text-white py-5 px-24 rounded-st font-bold text-sm mt-2">
          CHECKOUT
        </button>
      </div>
        </div>
        
        
      </div>
      
    </div>
  );
}