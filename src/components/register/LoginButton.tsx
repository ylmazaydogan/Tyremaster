import Link from "next/link";

const LoginButton = () => {
    return (
        <Link href="/login">
            <button
                className="
                    border-2 border-green text-green
                    font-semibold w-[210px] h-[52px] rounded-st
                     hover:bg-green hover:text-white uppercase
                    mt-2
                        "
            >
                login
            </button>
        </Link>
    );
};

export default LoginButton;