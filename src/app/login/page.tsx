import React from 'react';
import RegisterSection from '@/components/login/RegisterSection';
import SectionHeader from '@/components/login/SectionHeader';
import LoginForm from '@/components/login/LoginForm';
const RegisterPage = () => {
    return (
        <main className='flex-grow'>
            <div className='grid lg:grid-cols-2 mt-10 lg:mt-12 lg:divide-x lg:divide-cool-gray'>
                <div className='flex flex-col gap-2 lg:pl-56'>
                    <SectionHeader />
                    <LoginForm />
                </div>
                <RegisterSection /> 
                    <div className="flex justify-start mt-10 ml-40"> 
                    </div>
                </div>
        </main>
    );
};

export default RegisterPage;
