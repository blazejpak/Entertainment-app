import React from "react";

const Input = ({ placeholder, onChange, type }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className="bg-transparent outline-none border-b border-[#5A698F]  placeholder:pl-4 pb-2 text-sm placeholder:text-opacity-50 caret-[#FC4747]"
      placeholder={placeholder}
    />
  );
};

export default Input;
