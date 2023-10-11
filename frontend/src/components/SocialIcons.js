import React from "react";
import { FaFacebookSquare } from "react-icons/fa"
import {  RiTwitterXFill } from "react-icons/ri";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
const SocialIcons = () => {
  return (
    <>
      <div>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
        duration-300 "
        >
          <ion-icon><a href="https://www.facebook.com/login/"><FaFacebookSquare className="text-blue-500"/></a></ion-icon>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
        duration-300 "
        >
          <ion-icon><a href="https://twitter.com/i/flow/login"><RiTwitterXFill className="text-black"/></a></ion-icon>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
        duration-300 "
        >
          <ion-icon><a href="https://www.instagram.com/"><BsInstagram className="text-pink-600"/></a></ion-icon>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
        duration-300 "
        >
          <ion-icon><a href="https://www.linkedin.com/"><BsLinkedin className="text-blue-600"/></a></ion-icon>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
        duration-300 "
        >
          <ion-icon><a href="https://github.com/"><BsGithub className="text-black"/></a></ion-icon>
        </span>
      </div>
    </>
  );
};

export default SocialIcons;
