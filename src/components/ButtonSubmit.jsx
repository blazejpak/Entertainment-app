import React from "react";

const ButtonSubmit = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="w-full bg-[#FC4747] rounded font-light text-center py-3 mt-3"
    />
  );
};

export default ButtonSubmit;
