import React, { useState } from 'react'
import Name_Logo from '../assets/images/Name_Logo.webp';
import { IoIosMenu } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [navToggle, setNavToggle] = useState(false);

  const handleNavClose = () => {
    setNavToggle(false);
  };

  return (
    <>
      <div className="relative">
        <div className="w-full h-[10vh] sm:h-[8vh] xl:h-[10vh] p-4 sm:p-4 sm:px-8 xl:px-16 border-b-[.5px] border-[#333333] flex items-center justify-between">
          <Link to={'/'}>
            <img
              className="w-24 sm:w-28 lg:w-32 xl:w-24"
              src={Name_Logo}
              alt="Youth philosophy logo" />
          </Link>
          <div
            onClick={() => setNavToggle(!navToggle)}
            className="text-2xl sm:text-3xl lg:text-4xl cursor-pointer xl:hidden">
            <IoIosMenu />
          </div>
          <div className="hidden xl:block">
            <ul className="">
              <li className="flex gap-12 items-center justify-center">
                <a href="/#features" className="hover:text-[#dadada]">Features</a>
                <a href="/#features" className="hover:text-[#dadada]">Curriculum</a>
                <a href="/#features" className="hover:text-[#dadada]">Pricing</a>
                <a href="/#features" className="hover:text-[#dadada]">FAQS</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => {
            setNavToggle(false);
          }}
          className={`fixed inset-0 bg-black bg-opacity-60 z-40 transform transition-transform duration-300 ease-in-out ${navToggle ? 'translate-x-0' : 'translate-x-full'}`}
        />
        <div className={`fixed top-0 right-0 w-[60%] h-screen z-50 bg-[#1B1B1B] transform transition-transform duration-500 ease-in-out ${navToggle ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="w-full h-[10vh] sm:h-[8vh] p-4 sm:p-4 sm:px-8 border-b-[.5px] border-[#333333] flex items-center justify-between">
            <img className="w-24 sm:w-28 lg:32" src={Name_Logo} alt="Youth philosophy logo" />
            <div onClick={() => {
              setNavToggle(false);
            }} className="text-2xl sm:text-3xl lg:text-4xl cursor-pointer">
              <IoCloseOutline />
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <ul className="flex flex-col gap-4">
              <li className="text-xl sm:text-2xl lg:text-3xl text-center">
                <a href="/#features" onClick={handleNavClose}>Features</a>
              </li>
              <li className="text-xl sm:text-2xl lg:text-3xl text-center">
                <a href="/#curriculum" onClick={handleNavClose}>Curriculum</a>
              </li>
              <li className="text-xl sm:text-2xl lg:text-3xl text-center">
                <a href="/#pricing" onClick={handleNavClose}>Pricing</a>
              </li>
              <li className="text-xl sm:text-2xl lg:text-3xl text-center">
                <a href="/#faqs" onClick={handleNavClose}>FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar