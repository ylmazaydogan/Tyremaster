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
        <div className="flex flex-col gap-3 mt-4 text-sm mr-64 ">
            <a href="#" className="text-white ">Tyre Shop</a>
            <a href="#" className="text-white ">Contact us</a>
            <a href="#" className="text-white ">All brands</a>
        </div>
    )
}
