import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error?.code?.split("/")[1]);
    }
  }, [error]);

  // login system implement
  const handleSignup = async (e) => {
    e.preventDefault();
    // get user data and make object
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password && confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
  return (
    <div className="grid justify-center items-center h-[80vh]">
      <div className=" card w-96 bg-base-100 shadow-xl">
        <h2 className="text-3xl font-semibold text-center my-4">Register</h2>
        <form onSubmit={handleSignup} className="py-4 px-3 space-y-4">
          <input
            type="name"
            onClick={() => setErrorMessage("")}
            placeholder="your Name"
            name="name"
            required
            className="input input-bordered w-full"
          />
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
            placeholder="password"
            required
            name="password"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            onClick={() => setErrorMessage("")}
            placeholder="confirm password"
            required
            name="confirmPassword"
            className="input input-bordered w-full"
          />
          {errorMessage && <p className="text-error">{errorMessage}</p>}

          <input type="submit" value="Register" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
