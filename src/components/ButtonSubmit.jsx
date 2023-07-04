import React from "react";

const ButtonSubmit = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="mt-3 w-full cursor-pointer rounded bg-[#FC4747] py-3 text-center font-light transition-colors hover:bg-white hover:text-[#10141E]"
    />
  );
};

export default ButtonSubmit;
