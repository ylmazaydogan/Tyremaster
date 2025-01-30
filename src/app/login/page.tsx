import React from 'react';
import RegisterSection from '@/components/login/RegisterSection';
import LoginSection from '@/components/login/LoginSection';

const RegisterPage = () => {
    return (
        <main className='flex-grow'>
            <div className='grid lg:grid-cols-2 mt-10 lg:mt-12 lg:divide-x lg:divide-cool-gray mb-32'>
                <LoginSection />
                <RegisterSection />
            </div>
        </main>
    );
};

export default RegisterPage;
