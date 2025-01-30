import React from 'react';
import RegisterSection from '@/components/login/RegisterSection';
import LoginSection from '@/components/login/LoginSection';

const RegisterPage = () => {
    return (
        <main className='flex-grow mx-7'>
            <div className='grid lg:grid-cols-2 mt-4 lg:divide-x lg:divide-cool-gray mb-8'>
                <LoginSection />
                <RegisterSection />
            </div>
        </main>
    );
};

export default RegisterPage;
