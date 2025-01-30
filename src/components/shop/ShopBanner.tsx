import Image from "next/image";

interface ShopBannerProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imageSrc?: string;
    height?: string;
}

const ShopBanner = ({
    title,
    subtitle,
    description,
    imageSrc = "/images/tyremaster-2.png",
    height = "h-[158px]"
}: ShopBannerProps) => {
    return (
        <div className={`relative ${height} w-full`}>
            <div className="">
                <Image
                    src={imageSrc}
                    alt="Banner"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="relative h-full flex flex-col justify-center text-left ml-10 mt-1.5">
                {subtitle && (
                    <h3 className="text-white text-base uppercase tracking-wider">
                        {subtitle}
                    </h3>
                )}
                {title && (
                    <h2 className="text-white text-4xl font-bold uppercase mt-1.5">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="text-white text-base text-left pb-2">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ShopBanner; 