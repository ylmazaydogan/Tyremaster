import RegisterButton from "./RegisterButton";

const RegisterSection = () => {
    return (
        <div className='flex flex-col gap-4 lg:pl-12'>
            <div className="flex items-center gap-4">
                        <span className='text-black font-semibold uppercase text-4xl '>register</span>
                        <hr className='border-cool-gray w-full h-[1px]' />
                    </div>
            <p className="text-gray text-sm ">
                Registering for this site allows you to access our B2B Tyre procurement platform. Just fill
                in the fields below, and we’ll get a new account set up for you in no time. We will only ask
                you for information necessary to make the purchase process faster and easier.
            </p>
            <div className="flex justify-start mt-10 ml-40">
                <RegisterButton />
            </div>
        </div>
    );
};

export default RegisterSection;
