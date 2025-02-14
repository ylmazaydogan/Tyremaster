export default function Useful() {
    return (
        <div className="flex flex-col mt-10">
            <UsefulHeader />
            <UsefulLinks />
        </div>
    )
}

const UsefulHeader = () => {
    return (
        <span className="text-base text-white font-semibold uppercase  ">Useful Links</span>
    )
}

const UsefulLinks = () => {
    return (
        <div className="flex flex-col gap-4 mt-4 text-sm mr-64 ">
            <a href="/shop" className="text-white mt-1.5 ">Tyre Shop</a>
            <a href="/contact-us" className="text-white mt-1.5 ">Contact us</a>
            <a href="#" className="text-white mt-1.5 ">All brands</a>
        </div>
    )
}
