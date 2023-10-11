import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import Header from "../components/Header";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password does not match");
    } else {
      try {
        const res = await register({ name, email, password, address }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
    <Header/>
      <div>
        <div className="flex items-center justify-center  h-screen bg-cover bg-no-repeat bg-center bg-[url(https://wallpapercave.com/wp/wp2808714.jpg)]">
          <div className="bg-white font-semibold text-center rounded-3xl w-full mt-4 mb-4 sm:py-4 sm:w-1/2 border shadow-2xl px-2 py-4 sm:px-20 sm:items-center ">
            {/**<img
            class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="product designer"
  /> */}
            <h1 className=" font-bold text-xl text-amber-500">SIGN UP</h1>
            <h1 className="flex justify-center m-4 text-lg font-extrabold text-red-700"> WELCOME TO SAR JEWEL !</h1>
            {isLoading && <Loader />}
            <div className="relative mb-6" data-te-input-wrapper-init>

            <form onSubmit={submitHandler}>
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="address"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 h-full px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
                >
                  Register
                </button>
                <h3 className="mt-6 text-sm text-gray-600 text-center">
                  Already have an account?
                  <Link to="/login">
                    <span className="text-red-500 text-lg font-semibold"> Login</span>
                  </Link>
                </h3>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RegisterScreen