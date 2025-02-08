import Link from "next/link";

const RegisterButton = () => {
    return (
        <Link href="/register">
            <button
                className="
                border-2 border-green text-green
                font-semibold py-3 px-16 rounded-st
                hover:bg-green hover:text-white block mx-auto mt-7
            ">
                REGISTER
            </button>
        </Link>
    );
};

export default RegisterButton;