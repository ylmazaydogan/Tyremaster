"use client";

import { useState } from "react";
import { Link } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useRegisterForm, useAuth } from "commaleon-shop-api";

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useRegisterForm();

  const handleRegister = (data: RegisterData) => {
    console.log(data);
    signUp.mutate({
      Email: data.email,
      Password: data.password,
    });
  };

  return (
    <form
      className="flex flex-col mb-16"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="flex flex-col gap-4">
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <Input
        {...register("email")}
        type="email"
        required
        className="mt-6 text-sm"
        placeholder="Email*"
      />

      <div className="relative">
        <Input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          required
          className="mt-6 text-sm"
          placeholder="Password*"
        />
        <Input
          {...register("confirmPassword")}
          className="col-span-full"
          placeholder="Confirm Password*"
          type="password"
          required
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

      <div className="flex flex-col gap-4 mt-4 self-start">
        <div className="flex items-center space-x-2">
          <Controller
            control={control}
            name="terms"
            render={({ field }) => (
              <Checkbox
                onCheckedChange={() => field.onChange(!field.value)}
                checked={field.value}
                id="terms"
              />
            )}
          />
          <label
            htmlFor="terms"
            className="text-xs text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Link href="/terms-conditions">
              I agree to the <u>terms and conditions</u>
            </Link>
          </label>
        </div>
        {errors?.terms && (
          <span className="text-red-500 text-sm ml-2">
            {errors.terms.message}
          </span>
        )}
      </div>

      <div className="flex justify-center lg:mt-auto pt-4 lg:pt-8 border-t-2 border-cool-gray">
        <button
          type="submit"
          className="mt-9 w-3/5 h-3/4 bg-green text-white font-semibold hover:bg-green rounded-st uppercase mb-5 disabled:opacity-50"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
