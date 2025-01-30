import Image from "next/image"

const Brands = () => {
  return (
    <div className=" flex justify-center mt-3 mx-8 ">
      <div className="w-[1400px] h-[239px] relative">
        <Image
          src="/images/brandsection.png"
          alt="TyreMaster Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Brands;