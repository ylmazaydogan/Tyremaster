import LoginButton from "./LoginButton";

const LoginSection = () => {
    return (
        <div className="flex flex-col lg:pl-16 mt-10 lg:mt-0">
                    <div className="flex gap-6 items-center">
                        <span className="text-black font-semibold uppercase text-4xl ">login</span>
                        <hr className="border-cool-gray w-full h-[1px]" />
                    </div>
                    <p className="text-gray text-sm mt-2.5">
                        Login here by filling your username and password or use your favorite social network<br /> account to enter the site. Site login will simplify the purchase process and allows you<br /> to manage your personal account.
                    </p>
                    <div className="flex justify-start pl-44 mt-10">
                       <LoginButton />
                    </div>
                </div>
    );
};

export default LoginSection;

