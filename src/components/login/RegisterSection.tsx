import RegisterButton from "./RegisterButton";
import SectionHeader from "./SectionHeader";
const RegisterSection = () => {
    return (
        <div className='flex flex-col gap-4 pl-4 lg:pl-16 '>
            <SectionHeader title="register"/>
            <p className="text-gray text-sm leading-relaxed">
                Registering for this site allows you to access our B2B Tyre procurement platform. Just fill<br></br>
                in the fields below, and we’ll get a new account set up for you in no time. We will only ask<br></br>
                you for information necessary to make the purchase process faster and easier.
            </p>
            <div className="flex justify-start mt-10 ml-40">
                <RegisterButton />
            </div>
        </div>
    );
};

export default RegisterSection;
