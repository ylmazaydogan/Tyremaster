import React from 'react';
import RegisterSection from '@/components/login/RegisterSection';
import LoginSection from '@/components/login/LoginSection';
import ShopBanner from '@/components/shop/ShopBanner';

const RegisterPage = () => {
    return (
        <main className='flex-grow login-register-page'>


            <div className='grid lg:grid-cols-2 mt-4 lg:divide-x lg:divide-cool-gray mb-8 mx-auto'>
                <LoginSection />
                <RegisterSection />
            </div>
        </main>
    );

};

export default RegisterPage;
