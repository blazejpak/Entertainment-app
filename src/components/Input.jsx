import React from "react";

const Input = ({ placeholder, onChange, type, isEmpty }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className={`w-full  bg-transparent pb-2  text-sm caret-[#FC4747] outline-none placeholder:pl-4 placeholder:text-opacity-50 ${isEmpty}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
