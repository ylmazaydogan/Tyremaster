const ContentSection = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-6 items-center">
                <span className="text-black font-semibold uppercase text-xl md:text-2xl lg:text-3xl whitespace-nowrap">{title}</span>
                <hr className="border-light-silver-2 w-full h-[1px]"></hr>
            </div>
            <p className="text-black text-base text-justify mt-4">{content}</p>
        </div>
    )
}

export default ContentSection;