"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";
import { useLoginForm, useAuth } from "commaleon-shop-api";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const handleLogin = (data: {
    email: string;
    password: string;
    recaptcha: string;
  }) => {
    signIn?.mutate(data, {
      onSuccess: () => {
        console.log("Login successful!");
        router.push("/");
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    });
  };

  return (
    <div className="flex flex-col pr-6 lg:pr-10">
      <form
        className="flex flex-col lg:min-h-[594px]"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="gap-1 flex flex-col mt-1">
          <Input
            label="Username or email address"
            className="text-sm text-dark-gray"
            required
            {...register("email")}
            error={errors.email}
          />
        </div>
        <div className="mt-1.5 gap-1 flex flex-col relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            className="mt-6 text-sm"
            {...register("password")}
            error={errors.password}
          />
          <div className="absolute inset-y-0 right-4 flex items-center mt-14">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="relative"
            >
              <svg
                width="21"
                height="14"
                viewBox="0 0 21 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3636 7C20.3636 7 16.5455 0 10.1818 0C3.81818 0 0 7 0 7C0 7 3.81818 14 10.1818 14C16.5455 14 20.3636 7 20.3636 7ZM1.49291 7C2.10736 6.06402 2.81523 5.19283 3.60564 4.39982C5.24364 2.75927 7.48364 1.27273 10.1818 1.27273C12.88 1.27273 15.1187 2.75927 16.7593 4.39982C17.5497 5.19283 18.2576 6.06402 18.872 7C18.799 7.1103 18.7163 7.23248 18.6238 7.36655C18.1975 7.97745 17.5675 8.792 16.7593 9.60018C15.1187 11.2407 12.8787 12.7273 10.1818 12.7273C7.48491 12.7273 5.24491 11.2407 3.60436 9.60018C2.81396 8.80717 2.10736 7.93598 1.49291 7Z"
                  fill="#777777"
                />
                <path
                  d="M10.1818 3.81818C9.33795 3.81818 8.52864 4.15341 7.93193 4.75011C7.33523 5.34682 7 6.15613 7 7C7 7.84387 7.33523 8.65318 7.93193 9.24988C8.52864 9.84659 9.33795 10.1818 10.1818 10.1818C11.0257 10.1818 11.835 9.84659 12.4317 9.24988C13.0284 8.65318 13.3636 7.84387 13.3636 7C13.3636 6.15613 13.0284 5.34682 12.4317 4.75011C11.835 4.15341 11.0257 3.81818 10.1818 3.81818Z"
                  fill="#777777"
                />
              </svg>
              {!showPassword && (
                <div className="absolute top-1/2 left-0 w-[22px] h-[1.5px] bg-[#777777] transform -rotate-45" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-7 pr-10">
          <label className="flex items-center text-base text-gray cursor-pointer group transition-all transform duration-300 ease-in-out">
            <input
              type="checkbox"
              className="w-4 h-4 text-green bg-gray-100 rounded-st border-light-silver-2  checked:bg-green"
            />
            <span className="ml-2 select-none group-hover:text-green transition-all duration-300 ease-in-out">
              Remember me
            </span>
          </label>
          <Link
            href="/forgot-password"
            className="text-green hover:text-green text-15px underline"
          >
            Lost your password?
          </Link>
        </div>
        <hr className="border-t border-cool-gray mt-16"></hr>
        <SubmitButton />
      </form>
    </div>
  );
};

export default LoginForm;
