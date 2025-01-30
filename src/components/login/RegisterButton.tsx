import Link from "next/link";

const RegisterButton = () => {
    return (
        <Link href="/register">
            <button
                className="
                border-2 border-green text-green
                font-semibold py-2 px-14 rounded-st
                hover:bg-green hover:text-white
            ">
                REGISTER
            </button>
        </Link>
    );
};

export default RegisterButton;