import RegisterButton from "./RegisterButton";
import SectionHeader from "./SectionHeader";
const RegisterSection = () => {
    return (
        <div className='flex flex-col gap-4 pl-4'>
            <SectionHeader title="register"/>
            <p className="text-gray text-sm">
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
