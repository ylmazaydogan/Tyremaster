import Image from "next/image";

const Brands = () => {
  return (
    <div className=" flex justify-center mx-8 -mb-10 ">
      <div className="w-[1300px] h-[209px] relative">
        <Image
          src="/images/brandsection.png"
          alt="TyreMaster Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Brands;
