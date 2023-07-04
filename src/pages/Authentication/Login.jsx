import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import ButtonSubmit from "../../components/ButtonSubmit";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitClicked((prevState) => !prevState);

    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  let emailError;
  let passwordError;
  if (email === "" && submitClicked)
    emailError = (
      <p className="absolute right-[20%] top-[50%] translate-y-[-50%] pb-2  text-sm font-light text-[#FC4747]">
        Can't be empty!
      </p>
    );
  if (password === "" && submitClicked)
    passwordError = (
      <p className="absolute right-[20%] top-[50%] translate-y-[-50%] pb-2  text-sm font-light text-[#FC4747]">
        Can't be empty!
      </p>
    );

  return (
    <main className="col-span-full flex flex-col items-center gap-14">
      <img src={Logo} className="mt-12 h-6 w-8" alt="Logo" />
      <div className="flex w-[90%]  max-w-[330px] flex-col gap-6 rounded-lg bg-[#161D2F] px-6 pb-8 pt-6 sm:max-w-[400px] ">
        <h1 className="text-4xl font-light">Login</h1>
        <form className="mt-5 flex flex-col gap-6" onSubmit={handleSubmit}>
          <div
            className={` relative  border-b border-[#5A698F] ${
              emailError ? "border-[#FC4747]" : ""
            }`}
          >
            <Input
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              isEmpty={`${emailError ? "border-[#FC4747]" : ""}`}
            />
            {emailError}
          </div>
          <div
            className={` relative  border-b border-[#5A698F] ${
              passwordError ? "border-[#FC4747]" : ""
            }`}
          >
            <Input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            {passwordError}
          </div>
          <ButtonSubmit value="Login to your account" />
        </form>
        <div className="flex justify-center gap-2 text-sm  font-light">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-[#FC4747]">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
