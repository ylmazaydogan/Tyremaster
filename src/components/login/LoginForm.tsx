import InputField from "../Input";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
    return (
        <div className='flex flex-col'>
            <form className='flex flex-col lg:min-h-[594px]'>
                <div className='gap-1 flex flex-col pr-10 mt-1'>
                    <InputField
                        label="Username or email address"
                        className="text-sm text-dark-gray"
                        required
                    />
                </div>
                <div className='mt-6 gap-1 flex flex-col pr-10 '>
                    <InputField
                        label="Password"
                        className="text-sm text-dark-gray"
                        required
                    />
                </div>
               
                <div className="flex items-center justify-between mt-7 pr-10">
                    
                    <label className="flex items-center text-base text-gray cursor-pointer group transition-all transform duration-300 ease-in-out">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-green-600 bg-gray-100 rounded border-light-silver-2 focus:ring-green-500"
                        />
                        <span className="ml-2 select-none group-hover:text-green transition-all duration-300 ease-in-out">
                            Remember me
                        </span>
                    </label>
                    <a href="#" className="text-green hover:text-green text-15px underline">
                        Lost your password?
                    </a>
                </div>
                <div className=" border-t border-cool-gray mt-5"></div>
                <SubmitButton/>
            </form>
        </div>
    );
};

export default  LoginForm;