import LoginForm from "./LoginForm";
import SectionHeader from "./SectionHeader";

const LoginSection = () => {
    return (
        <div className='flex flex-col gap-2 '>
            <SectionHeader title="login" />
            
            <LoginForm/>
        </div>
    );
};

export default LoginSection;