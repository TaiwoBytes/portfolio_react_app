import React, { useState } from "react";
import Logo from "../../Assets/Logo.jpg";
import { FaBars, FaTimes,FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; 
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
  const [navbars, setNavbars] = useState(false);
  const handleClick = () => setNavbars(!navbars);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300">
      <div>
        <img src={Logo} alt="Taiwo's Logo" style={{ width: "75px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navbars ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          !navbars
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px]  ml-[-100px] hover:ml-[-10px] duration-300'><a className='flex justify-between items-center w-full text-gray-300 bg-blue-600' href="">LinkedIn<FaLinkedin size={30} /></a></li>
          <li className='w-[160px]  ml-[-100px] hover:ml-[-10px] duration-300'><a className='flex justify-between items-center w-full text-gray-300 bg-[#333333]' href="">GitHub<FaGithub size={30} /></a></li>
          <li className='w-[160px]  ml-[-100px] hover:ml-[-10px] duration-300'><a className='flex justify-between items-center w-full text-gray-300 bg-[#D0312D]' href="">Email<HiOutlineMail size={30} /></a></li>
          <li className='w-[160px]  ml-[-100px] hover:ml-[-10px] duration-300'><a className='flex justify-between items-center w-full text-gray-300 bg-[#565F69]' href="">Resume<BsFillPersonLinesFill size={30} /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
