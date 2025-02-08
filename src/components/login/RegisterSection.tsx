import RegisterButton from "./RegisterButton";
import SectionHeader from "./SectionHeader";
const RegisterSection = () => {
    return (
        <div className='flex flex-col lg:pl-16 mt-10 lg:mt-0'>
            <SectionHeader title="register"/>
            <p className="mt-2.5 text-justify text-gray text-sm">
                Registering for this site allows you to access our B2B Tyre procurement platform. Just fill
                in the fields below, and we’ll get a new account set up for you in no time. We will only ask
                you for information necessary to make the purchase process faster and easier.
                <RegisterButton />
            </p>
            
        </div>
    );
};

export default RegisterSection;
