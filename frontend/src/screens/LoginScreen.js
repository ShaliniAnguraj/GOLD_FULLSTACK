import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import Header from "../components/Header";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex h-screen items-center justify-center bg-cover bg-no-repeat bg-center bg-[url(https://wallpapercave.com/wp/wp2808714.jpg)]">
      <div className="bg-white font-semibold text-center rounded-3xl w-full my-4 sm:py-4 sm:w-1/2 border shadow-2xl px-2 py-4 sm:px-20 sm:items-center">
      <h1 className="font-extrabold text-amber-600 text-3xl">Sign In</h1>
          <h1 className="flex justify-center m-4 text-lg font-bold text-red-700">
            WELCOME TO SAR JEWEL !
          </h1>
          {isLoading && <Loader />}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <form onSubmit={submitHandler}>
              <input
                className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />

              <input
                className="w-full px-5 mb-5 py-3 rounded-lg font-semibold bg-gray-100 border border-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password"
                required
              />
               <button
                  className="mt-5 tracking-wide font-semibold bg-yellow-500 text-gray-100 w-full py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                
                >
                  <span className="ml-3 hover:text-xl hover:text-black">Sign In</span>
                </button>
                <h3 className="mt-6 text-gray-600 text-center">
                  <p className="mr-2">
                    Don't have an account?
                    <span className="text-red-500 text-lg font-semibold hover:text-xl hover:text-orange-600">
                      <a href ="/register"> Register</a>
                    </span>
                  </p>
                </h3>
            </form>
          </div>

      </div>

    </div>
    </>
  );
};

export default LoginScreen;
