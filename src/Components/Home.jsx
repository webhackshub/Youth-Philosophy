import React from 'react'
import Youtube_Logo from '../assets/images/Youtube_Logo.webp';
import Course_Preview from '../assets/images/Course_Preview.webp';
import { BiSolidUserPin } from 'react-icons/bi'
import { IoLanguage } from 'react-icons/io5'
import { MdLocalLibrary, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { RiStarHalfFill, RiStarSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Home = () => {

  const webData = {
    coursePreviewLink: "https://www.youtube.com/watch?v=m5gxIAxuMNE",
    currentTab: "Home > Courses > Quit masturbation & porn addiction",
    courseTitle: "Break free from addiction: Quit porn & masturbation",
    courseDescription: "A complete guide to overcome your porn & masturbation addiction.",
    courseRating: "(14 ratings)",
    courseEnrolled: "104 subscribers"
  };

  return (
    <>
      <div className="w-full p-4 sm:p-6 sm:px-8 xl:p-4 xl:px-16 sm:pb-0 pb-0">
        <span className="sm:text-lg lg:text-xl xl:text-base">{webData.currentTab}</span>
        <div className="xl:pt-8 xl:flex xl:flex-row-reverse xl:items-center xl:justify-center xl:gap-8">
          <div className="w-full h-[25vh] lg:h-[35vh] xl:h-1/2 m-7 lg:m-8 lg:mx-0 xl:m-0 mx-0">
            <Link to={webData.coursePreviewLink}>
              <div className="w-full h-full relative">
                <img className="w-full h-full rounded-sm object-cover object-center" src={Course_Preview} alt="Quit masturbation & porn addiction course" />
                <div className="w-full h-full top-0 left-0 flex items-center justify-center absolute bg-[#000000]/20">
                  <img className='w-16 sm:w-20' src={Youtube_Logo} alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full">
            <h2 className="w-full text-xl sm:text-2xl lg:text-3xl capitalize leading-6 font-semibold">{webData.courseTitle}</h2>
            <p className="w-full p-4 px-0 leading-5 sm:text-lg lg:text-xl xl:text-lg">{webData.courseDescription}</p>
            <div className="gap-2 flex items-center">
              <span className="text-sm sm:text-base lg:text-xl xl:text-base font-semibold text-[#fceb90]">4.6</span>
              <div className="flex text-[#d9c13c]">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarHalfFill />
              </div>
              <span className="text-sm sm:text-base lg:text-xl xl:text-base underline text-[#DC2626]">{webData.courseRating}</span>
            </div>
            <span className="p-1 px-0 text-sm sm:text-base lg:text-xl xl:text-base flex gap-2">
              <span className="">Author:</span>
              <span className="underline">Suraj Yadav</span>
            </span>
            <div className="p-2 px-0 flex flex-col">
              <span className="gap-2 flex items-center sm:text-lg lg:text-xl xl:text-base text-[#dadada]">
                <div className="text-[#DC2626] text-lg sm:text-xl lg:text-2xl xl:text-lg">
                  <IoLanguage />
                </div>
                <span className="font-medium text-[#dadada]">Language:</span>
                <span className="font-medium text-white">Hindi</span>
              </span>
              <span className="gap-2 flex items-center sm:text-lg lg:text-xl xl:text-base text-[#dadada]">
                <div className="text-[#DC2626] text-lg sm:text-xl lg:text-2xl xl:text-lg">
                  <MdOutlineAccessTimeFilled />
                </div>
                <span className="font-medium text-[#dadada]">Duration:</span>
                <span className="font-medium text-white">1 Hour</span>
              </span>
              <span className="gap-2 flex items-center sm:text-lg lg:text-xl xl:text-base text-[#dadada]">
                <div className="text-[#DC2626] text-lg sm:text-xl lg:text-2xl xl:text-lg">
                  <MdLocalLibrary />
                </div>
                <span className="font-medium text-[#dadada]">Curriculum:</span>
                <span className="font-medium text-white">6 chapters</span>
              </span>
              <span className="gap-2 flex items-center sm:text-lg lg:text-xl xl:text-base text-[#dadada]">
                <div className="text-[#DC2626] text-lg sm:text-xl lg:text-2xl xl:text-lg">
                  <BiSolidUserPin />
                </div>
                <span className="font-medium text-[#dadada]">Format:</span>
                <span className="font-medium text-white">Recorded</span>
              </span>
            </div>
            <p className="w-full p-1 sm:p-2 sm:px-0 px-0 sm:text-lg lg:text-xl xl:text-base">Join over 440k subscribers who are transforming their lives.</p>
            <Link to="/Form">
              <button className="w-full xl:w-fit m-4 mx-0 p-3 sm:p-4 lg:p-6 xl:p-4 xl:px-16 rounded-sm sm:text-xl lg:text-2xl xl:text-base font-medium bg-[#DC2626]">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home