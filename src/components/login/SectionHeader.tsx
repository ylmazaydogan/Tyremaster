const SectionHeader = ({ title }: { title: string }) => {
    return (
        <div className='flex gap-6 items-center'>
            <span className='text-black font-semibold uppercase text-4xl '>{title}</span>
            <hr className='border-cool-gray w-full h-[1px]' />
        </div>
    );
};

export default SectionHeader;