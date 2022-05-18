import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();
  const [signInWithEmailAndPassword, emailUser, , emailError] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (emailUser) {
      navigate("/");
    }
  }, [emailUser, navigate]);

  useEffect(() => {
    if (emailError) {
      setErrorMessage(emailError?.code?.split("/")[1]);
    }
  }, [emailError]);

  // login system implement
  const handleLogin = async (e) => {
    e.preventDefault();
    // get user data and make object
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="grid justify-center items-center h-screen">
      <div className=" card w-96 bg-base-100 shadow-xl">
        <h2 className="text-3xl font-semibold text-center my-4">Login</h2>
        <form onSubmit={handleLogin} className="py-4 px-3 space-y-4">
          <input
            type="email"
            onClick={() => setErrorMessage("")}
            placeholder="your email"
            name="email"
            required
            className="input input-bordered w-full"
          />
          <input
            type="password"
            onClick={() => setErrorMessage("")}
            placeholder="your password"
            required
            name="password"
            className="input input-bordered w-full"
          />
          {errorMessage && <p className="text-error">{errorMessage}</p>}
          <p>
            <small>
              New to todo app? <Link to="/register" className="text-blue-400">click here</Link>
            </small>
          </p>

          <input type="submit" value="Login" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
