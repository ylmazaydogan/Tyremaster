import React from 'react';
import RegisterSection from '@/components/login/RegisterSection';
import LoginSection from '@/components/login/LoginSection';
import ShopBanner from '@/components/shop/ShopBanner';

const RegisterPage = () => {
    return (
        <main className='flex-grow'>
            <div className='grid lg:grid-cols-2 mt-10 lg:mt-16 lg:divide-x divide-light-silver-2 responsive mb-8'>
                <LoginSection/>
                <RegisterSection/>
            </div>
        </main>
    );

};

export default RegisterPage;
