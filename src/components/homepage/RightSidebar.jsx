import Image from 'next/image';
import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import swimming from '@/assets/swimming.png';
import classimg from '@/assets/class.png';
import playground from '@/assets/playground.png';
import bg from '@/assets/bg.png';

const RightSidebar = () => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn">
          <FaGithub />
          Login with Github
        </button>
      </div>

      <h2 className="font-bold text-lg mt-8">Find Us On</h2>
      <div className="flex flex-col mb-4">
        <button className="flex justify-center items-center gap-2 p-4 border border-gray-200">
          <FaFacebook />
          Facebook
        </button>
        <button className="flex justify-center items-center gap-2 p-4 border border-gray-200">
          <FaTwitter />
          Twitter
        </button>
        <button className="flex justify-center items-center gap-2 p-4 border border-gray-200">
          <FaInstagram />
          Instagram
        </button>
      </div>

      <div className="bg-gray-200 mt-2">
        <h2 className="font-bold text-lg p-2">Q-Zone</h2>
        <div>
          <Image src={swimming} alt="Swimming" className="w-full p-2"></Image>
          <Image src={classimg} alt="Classimg" className="w-full p-2"></Image>
          <Image
            src={playground}
            alt="Playground"
            className="w-full p-2"
          ></Image>
        </div>
        <Image src={bg} alt="Bg" className="w-full"></Image>
      </div>
    </div>
  );
};

export default RightSidebar;
