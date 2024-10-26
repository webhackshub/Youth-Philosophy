import React from 'react'

const Chapters = ({ chapter, icon, chapterName, topics }) => {
  return (
    <>
      <div className="w-full h-full relative rounded-lg bg-[#DC2626]/20">
        <h4 className="sm:text-lg lg:text-xl absolute -top-5 lg:-top-8 left-5 sm:left-6 lg:left-10 p-2 px-4 sm:px-6 lg:p-4 lg:px-8 rounded-lg border-2 border-[#DC2626] bg-[#3A1616]">{chapter}</h4>
        <div className="p-8 px-6 sm:px-8 lg:pt-16 lg:px-12 lg:flex lg:flex-row-reverse lg:justify-between">
          <div className="p-4 px-0 text-5xl sm:text-6xl lg:text-8xl lg:flex lg:items-center text-[#DC2626]">
            {icon}
          </div>
          <div className="">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl font-semibold mb-4 uppercase">{chapterName}</h2>
            <ul className="space-y-2">
              {topics.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 xl:w-2 xl:h-2 rounded-full bg-[#DC2626]"></div>
                  <span className="text-base sm:text-lg lg:text-xl xl:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chapters