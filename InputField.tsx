import React from 'react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md'
}) => {

  const baseStyle = "w-full border rounded px-3 py-2 focus:outline-none";
  
  const variantStyles: Record<string, string> = {
    filled: "bg-gray-100 border-gray-300",
    outlined: "bg-white border-gray-300",
    ghost: "bg-transparent border-transparent"
  };

  const sizeStyles: Record<string, string> = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-2 px-3",
    lg: "text-lg py-3 px-4"
  };

  const invalidStyle = invalid ? "border-red-500" : "";

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="font-medium">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${invalidStyle}`}
      />
      {helperText && !invalid && <span className="text-sm text-gray-500">{helperText}</span>}
      {errorMessage && invalid && <span className="text-sm text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
