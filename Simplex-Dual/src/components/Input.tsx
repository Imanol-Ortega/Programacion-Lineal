import React from "react";

interface InputProps {
    type: string;
    name?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    onClick?: () => void;
    required?: boolean;
}

function Input({ type, name, onChange, onClick, required }: InputProps) {
    return (
        <input
            type={type}
            className="w-20 rounded-sm text-gray-900 text-xs p-1 bg-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            name={name}
            onChange={onChange}
            onClick={onClick}
            {...(required && { required })}
        />
    );
}

export default Input;
