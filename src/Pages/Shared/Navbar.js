import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className=" w-11/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Shopping ToDo
          </Link>
        </div>
        <div className="flex-none gap-2">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://Linkpi.lorem.space/image/face?hash=33791"
                      alt=""
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Settings</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut(auth)}
                      className="btn btn-active text-black btn-link"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="space-x-3">
              <button
                onClick={() => navigate("/login")}
                className="btn btn-outline"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                type="submit"
                className="btn"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
