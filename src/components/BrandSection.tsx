import Image from "next/image"

const BrandsSection=()=>{
    return(
        <div className="bg-white flex justify-center">
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

export default BrandsSection;