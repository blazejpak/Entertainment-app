import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";

import Input from "../../components/Input";
import ButtonSubmit from "../../components/ButtonSubmit";
import { UserAuth } from "../../context/AuthContext";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (password === checkPassword) await createUser(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <main className="flex flex-col gap-14 items-center col-span-full">
      <img src={Logo} className="h-6 w-8 mt-12" />
      <div className="flex flex-col  bg-[#161D2F] rounded-lg px-6 pt-6 pb-8 gap-6 w-[90%] max-w-[330px] sm:max-w-[400px] ">
        <h1 className="font-light text-4xl">Sign Up</h1>
        <form className="flex flex-col gap-6 mt-5" onSubmit={handleSubmit}>
          <Input
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Input
            placeholder="Repeat Password"
            onChange={(e) => setCheckPassword(e.target.value)}
            type="password"
          />
          <ButtonSubmit value="Login to your account" />
        </form>
        <div className="flex gap-2 font-light text-sm  justify-center">
          <p>Already have an account?</p>
          <Link to="/" className="text-[#FC4747]">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
