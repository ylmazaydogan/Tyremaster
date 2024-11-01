import ProductCard from '../components/ProductCard';
import CartTotal from '../components/CartTotal';

export default function Cart() {
  return (
    <div className="lg:mt-16 mt-2 xl:border-y border-cool-gray xl:border-r xl:rounded-r-[30px] flex flex-col lg:flex-row lg:space-x-16" >
     
      <div className="flex flex-col lg:w-2/3 lg:pr-10 pt-4 lg:pt-11 px-80">
        <h1 className="text-black font-semibold uppercase text-lg lg:text-4xl mb-6 font-arimo">YOUR PRODUCTS</h1>
        <div className="flex-grow h-px ml-4 bg-light-silver"></div>

        <div className="divide-y divide-light-silver">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

     
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-8 lg:mt-0">
        <CartTotal />
      </div>
    </div>
  );
}
