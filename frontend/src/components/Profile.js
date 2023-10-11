import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "./Loader";
import profile from "../assets/profile.png"
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const Profile = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');

    const dispatch = useDispatch();
  
    const { userInfo } = useSelector((state) => state.auth);
  
    const [updateProfile, { isLoading }] = useUpdateUserMutation();
  
    useEffect(() => {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setAddress(userInfo.address)
    }, [userInfo.email, userInfo.name, userInfo.address]);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
      } else {
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            name,
            email,
            password,
            address,
            
          }).unwrap();
          console.log(res);
          dispatch(setCredentials(res));
          toast.success('Profile updated successfully');
        } catch (err) {
          toast.error(err?.data?.message);
        }
      }
    };
  
  return (
    <div>
      <div class="flex items-center justify-center bg-none sm:bg-gradient-to-br sm:from-yellow-100 sm:to-red-500">
        <div class="bg-white font-semibold text-center rounded-3xl w-full mt-4 mb-4 sm:py-4 sm:w-1/2  border shadow-lg px-2 py-4 sm:px-20">
          <h1 class="flex justify-center font-bold text-xl mb-2 text-yellow-500">
            Update Profile
          </h1>
  <img
  class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
  src={profile}
  alt="product designer"
/>
<h1 class=" font-bold text-2xl text-red-500">{userInfo.name}</h1>
{isLoading && <Loader />}
<form onSubmit={submitHandler}>
  <div className="mx-auto max-w-md flex flex-col gap-4">
    <div className="my-2">
      <label className="flex justify-start text-gray-600 text-sm">
        Name
      </label>
      <input
        className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label className="flex justify-start text-gray-600 text-sm">
        Email
      </label>
      <input
        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <label className="flex justify-start text-gray-600 text-sm">
        Password
      </label>
      <input
        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <label className="flex justify-start text-gray-600 text-sm">
        Confirm Password
      </label>
      <input
        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
    <div>
      <label className="flex justify-start text-gray-600 text-sm">
        Address
      </label>
      <input
        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
    <button type="submit" class="bg-amber-500 h-full px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
  Update
</button>
  </div>
</form>

</div>
</div>
</div>
  )
}

export default Profile