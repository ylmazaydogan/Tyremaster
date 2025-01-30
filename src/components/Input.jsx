import React from 'react';

const InputField = ({ label, type = "text", required = false, placeholder = "", className = "", ...props }) => {
    return (
        <div className={`gap-1 flex flex-col ${className}`}>
            <label className='text-base'>
                {label}
                {required && <span className='text-red'>*</span>}
            </label>
            <input
                type={type}
                className='border border-cool-gray placeholder:text-gray outline-none rounded-st pl-5 text-base placeholder:text-base h-11'
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default InputField;
