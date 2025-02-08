const SectionHeader = ({ title }: { title: string }) => {
    return (
        <div className='flex gap-6 items-center'>
            <span className='text-black font-semibold uppercase text-4xl '>{title}</span>
            <hr className='border-cool-gray  h-[1px] w-2/3' />
        </div>
    );
};

export default SectionHeader;