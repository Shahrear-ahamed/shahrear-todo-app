import React from "react";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigationType } from "react-router-dom";
import { async } from "@firebase/util";

const Login = () => {
  let navigate = useNavigationType();
  let location = useLocation();
  const [user] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  let from = location.state?.from?.pathname || "/";

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
            placeholder="your email"
            name="email"
            required
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="your password"
            required
            name="password"
            className="input input-bordered w-full"
          />
          <input type="submit" value="Login" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
