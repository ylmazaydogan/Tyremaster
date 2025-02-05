import RegisterForm from '@/components/register/RegisterForm';
import RegisterSection from '@/components/register/RegisterSection';
import LoginSection from '@/components/register/LoginSection';

const RegisterPage = () => {
    return (
        <main className="flex-grow">
            <div className="grid lg:grid-cols-2 mt-10 lg:mt-12">
                <div className="flex flex-col gap-2 lg:pl-56 mb-8">
                    <RegisterSection /> 
                    <div className="flex flex-col">
                       <RegisterForm />

                    </div>
                </div>
                <LoginSection/>    
            </div>
        </main>
    );
};

export default RegisterPage;
