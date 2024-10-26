import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Course_Preview from "../assets/images/Course_Preview.webp";

const Course = () => {
  const location = useLocation();
  const { inviteLink } = location.state || {};

  const [webData] = useState({
    currentTab: "Home > Courses > Quit masturbation & porn addiction > Join",
  });

  return (
    <>
      <div className="w-full h-screen text-white bg-[#111111] font-[Poppins]">
        <Navbar />
        <div className="w-full p-4 sm:px-8 xl:px-16 flex flex-col gap-4">
          <span className="sm:text-lg lg:text-xl lg:p-2 lg:px-0 xl:p-0 xl:text-base">{webData.currentTab}</span>
          <div className="xl:flex xl:flex-col xl:items-center xl:gap-8 xl:p-4 xl:px-0">
            <div className="w-full h-[25vh] lg:h-[35vh] xl:w-1/2 xl:h-[45vh]">
              <img
                className="w-full h-full object-cover object-center"
                src={Course_Preview}
                alt="Quit masturbation & porn addiction course"
              />
            </div>
            <div className="w-full xl:w-1/2">
              {inviteLink ? (
                <Link to={inviteLink}>
                  <div className="flex flex-col gap-6 p-8 px-2 lg:p-12 lg:px-0 xl:p-0 lg:items-center">
                    <p className="font-medium uppercase text-center sm:text-lg lg:text-2xl xl:text-lg">You have successfully enrolled in the course. Click the button below to get the course.</p>
                    <button className="p-4 px-6 lg:p-6 lg:px-20 xl:p-4 xl:px-12 sm:text-lg lg:text-2xl xl:text-base rounded-lg font-medium uppercase text-white bg-[#DC2626]">Join now</button>
                  </div>
                </Link>
              ) : (
                <Link to={"/Form"}>
                  <div className="flex flex-col gap-6 p-8 px-2 lg:p-12 lg:px-0 xl:p-0 lg:items-center">
                    <p className="font-medium uppercase text-center sm:text-lg lg:text-2xl xl:text-lg">Looks like your don't have enrolled in the course. Click the button to enroll in the course.</p>
                    <button className="p-4 px-6 lg:p-6 lg:px-20 xl:p-4 xl:px-12 sm:text-lg lg:text-2xl xl:text-base rounded-lg font-medium uppercase text-white bg-[#DC2626]">Enroll now</button>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Course;
