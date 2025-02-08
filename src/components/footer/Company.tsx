export default function Company() {
    return (
        <div className="flex flex-col mt-10">
            <CompanyHeader/>
            <CompanyLinks/>
        </div>
    )
}

const CompanyHeader = () => {
    return (
        <span className="text-base text-white font-semibold uppercase">Company</span>
    )
}

const CompanyLinks = () => {
    return (
        <div className="flex flex-col gap-4 mt-4 text-sm ">
            <a href="/about-us" className="text-white mt-1.5 ">About Us</a>
            <a href="/terms-conditions" className="text-white mt-1.5 ">Terms & Conditions</a>
            <a href="/privacy-policy" className="text-white mt-1.5 ">Privacy Policy</a>
        </div>
    )
}
