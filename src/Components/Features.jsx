import React from 'react'

const Features = ({ icon, title, description, index }) => {
  return (
    <>
      <div key={index} className="w-full lg:w-[48%] h-full relative flex flex-col lg:flex-row lg:items-center lg:gap-5 p-5 sm:p-6 xl:p-10 xl:px-6 bg-black text-white rounded-lg border-r-2 border-r-[#DC2626]">
        <div className="absolute inset-0 bg-gradient-to-l from-[#DC2626]/20 to-transparent"></div>
        <div className="w-fit lg:h-fit p-2 xl:p-5 rounded-lg text-2xl sm:text-3xl lg:text-5xl bg-[#DC2626]/40">
          {icon}
        </div>
        <div className="p-2 px-0 sm:p-4 sm:px-0 lg:flex lg:flex-col lg:gap-2">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">{title}</h2>
          <p className="text-[#dadada] text-sm sm:text-base lg:text-lg xl:text-base">{description}</p>
        </div>
      </div>
    </>
  )
}

export default Features