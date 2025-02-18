"use client"

import { useState } from 'react';
import InputField from "../Input";
import { useRegisterForm, useAuth } from "factoryx-commerce";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register: signup } = useAuth();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useRegisterForm();

    const handleRegister = (data: { Email: string; Password: string }) => {
        console.log(data);
        signup.mutate({
            Email: data.Email,
            Password: data.Password,
        });
    };

    return (
        <form 
            className="flex flex-col mb-16" 
            onSubmit={handleSubmit(handleRegister)}
        >
            <InputField
                label="Username"
                className="text-sm"
                required
            />
            <InputField
                label="Email address"
                type="email"
                required
                className="mt-6 text-sm"
            />
            <div className="relative">
                <InputField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="mt-6 text-sm"
                />
                <div className="absolute inset-y-0 right-4 flex items-center mt-14">
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="relative"
                    >
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3636 7C20.3636 7 16.5455 0 10.1818 0C3.81818 0 0 7 0 7C0 7 3.81818 14 10.1818 14C16.5455 14 20.3636 7 20.3636 7ZM1.49291 7C2.10736 6.06402 2.81523 5.19283 3.60564 4.39982C5.24364 2.75927 7.48364 1.27273 10.1818 1.27273C12.88 1.27273 15.1187 2.75927 16.7593 4.39982C17.5497 5.19283 18.2576 6.06402 18.872 7C18.799 7.1103 18.7163 7.23248 18.6238 7.36655C18.1975 7.97745 17.5675 8.792 16.7593 9.60018C15.1187 11.2407 12.8787 12.7273 10.1818 12.7273C7.48491 12.7273 5.24491 11.2407 3.60436 9.60018C2.81396 8.80717 2.10736 7.93598 1.49291 7Z" fill="#777777" />
                            <path d="M10.1818 3.81818C9.33795 3.81818 8.52864 4.15341 7.93193 4.75011C7.33523 5.34682 7 6.15613 7 7C7 7.84387 7.33523 8.65318 7.93193 9.24988C8.52864 9.84659 9.33795 10.1818 10.1818 10.1818C11.0257 10.1818 11.835 9.84659 12.4317 9.24988C13.0284 8.65318 13.3636 7.84387 13.3636 7C13.3636 6.15613 13.0284 5.34682 12.4317 4.75011C11.835 4.15341 11.0257 3.81818 10.1818 3.81818ZM5.72727 7C5.72727 5.81858 6.19659 4.68555 7.03198 3.85016C7.86737 3.01477 9.0004 2.54545 10.1818 2.54545C11.3632 2.54545 12.4963 3.01477 13.3317 3.85016C14.167 4.68555 14.6364 5.81858 14.6364 7C14.6364 8.18142 14.167 9.31445 13.3317 10.1498C12.4963 10.9852 11.3632 11.4545 10.1818 11.4545C9.0004 11.4545 7.86737 10.9852 7.03198 10.1498C6.19659 9.31445 5.72727 8.18142 5.72727 7Z" fill="#777777" />
                        </svg>

                        {!showPassword && (
                            <div className="absolute top-1/2 left-0 w-[22px] h-[1.5px] bg-[#777777] transform -rotate-45" />
                        )}
                    </button>
                </div>
            </div>
            <p className="text-sm text-gray text-justify mt-11 mb-10">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our {' '}
                <a href="/privacy-policy" className="text-green underline">privacy policy</a>.

            </p>

            <div className="flex justify-center  lg:mt-auto pt-4 lg:pt-8  border-t-2 border-cool-gray">

                <button
                    type="submit"
                    className=" mt-9 w-3/5 h-3/4  bg-green text-white font-semibold hover:bg-green  rounded-st uppercase mb-5"
                >
                    register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
