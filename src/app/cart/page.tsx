import ProductCard from '@/components/ProductCard';
import CartTotal from '@/components/CartTotal';
import ShopBanner from '@/components/shop/ShopBanner';

export default function Cart() {
  return (
    <div>
      <ShopBanner
        title="CART"
        subtitle="FINALISE YOUR CART"
        description="Review and refine your cart details before proceeding to checkout."
      />
      

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-7 mt-4">
     
        <div className="lg:col-span-2 border border-light-silver-2 rounded-st p-6">
          <h1 className="text-black font-bold uppercase text-4xl mb-4 ">YOUR PRODUCTS</h1>
          <div className="divide-y divide-light-silver-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

       
        <div className="border border-light-silver-2 bg-white p-6 rounded-st shadow-md ">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}