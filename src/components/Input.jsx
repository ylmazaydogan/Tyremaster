import React from 'react';

const InputField = ({ 
    label, 
    type = "text", 
    required = false, 
    placeholder = "", 
    className = "", 
    icon = null,
    ...props 
}) => {
    return (
        <div className={`gap-1 flex flex-col ${className}`}>
         
            <label className='text-base'>
                {label}
                {required && <span className='text-red'>*</span>}
            </label>

         
            <div className="relative">
              
                <input
                    type={type}
                    className='border border-cool-gray placeholder:text-gray outline-none rounded-st pl-5 pr-10 text-base placeholder:text-base h-11 w-full'
                    placeholder={placeholder}
                    {...props}
                />

               
                {icon && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                        {icon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default InputField;
