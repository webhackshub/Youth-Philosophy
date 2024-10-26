import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';

// Assets
import Author from './assets/images/Author.webp';

// Components
import Features from './Components/Features';
import Chapters from './Components/Chapters';
import Pricing from './Components/Pricing';
import FAQs from './Components/FAQs';
import Footer from './Components/Footer';

// Icons
import { IoMdVideocam } from "react-icons/io";
import { RiChatPrivateFill, RiGlobalLine } from "react-icons/ri";
import { FaBrain } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


const App = () => {

  const PRICE = import.meta.env.VITE_PRICE;
  const DISCOUNT_END = import.meta.env.VITE_DISCOUNT_END;

  const locomotiveScroll = new LocomotiveScroll();

  const featuresCard = [
    {
      icon: <FaBrain />,
      title: "Rewire your brain",
      description: "Understand how to break addiction by reshaping your habits.",
    },
    {
      icon: <RiGlobalLine />,
      title: "Community Support",
      description: "Access support from others on the same journey.",
    },
    {
      icon: <RiChatPrivateFill />,
      title: "Private & Secure",
      description: "Your privacy is important. This course is 100% confidential.",
    },
    {
      icon: <IoMdVideocam />,
      title: "Exclusive Video",
      description: "Get access to a 45-60 minute, high-quality video guide.",
    }
  ];

  const courseCards = [
    {
      chapter: "Chapter 1",
      icon: <GiBrain />,
      chapterName: "Fundamentals",
      topics: [
        "Introduction",
        "How the Brain Works: Neuroplasticity",
        "How Success Works: Formula",
        "How Success Works: Pareto Principle"
      ]
    },
    {
      chapter: "Chapter 2",
      icon: <GiBrain />,
      chapterName: "Advanced Concepts",
      topics: [
        "Understanding Habits",
        "The Role of Environment",
        "Building a Support System"
      ]
    },
    {
      chapter: "Chapter 3",
      icon: <GiBrain />,
      chapterName: "Practical Applications",
      topics: [
        "Goal Setting Techniques",
        "Action Plan Development",
        "Monitoring Progress"
      ]
    },
    {
      chapter: "Chapter 4",
      icon: <GiBrain />,
      chapterName: "Practical Applications",
      topics: [
        "Goal Setting Techniques",
        "Action Plan Development",
        "Monitoring Progress"
      ]
    },
    {
      chapter: "Chapter 5",
      icon: <GiBrain />,
      chapterName: "Practical Applications",
      topics: [
        "Goal Setting Techniques",
        "Action Plan Development",
        "Monitoring Progress"
      ]
    }
  ];

  const webDebug = () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function (e) {
      if (e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) || // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) { // Ctrl+U
        return false;
      }
    };
    (function () {
      setInterval(function () {
        debugger;
      }, 100);
    })();
    setInterval(function () {
      if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        document.body.innerHTML = 'DevTools is open!';
      }
    }, 500);
  };
  webDebug();

  return (
    <>
      <div className="w-full min-h-screen text-white font-[Poppins] bg-[#111111]">

        {/* LANDING PAGE */}
        <div className="w-full h-full">
          {/* NAVBAR */}
          <Navbar />
          {/* HOME */}
          <Home />
        </div>

        {/* FEATURES */}
        <div id="features" className="w-full h-full p-4 sm:px-8 lg:p-8 xl:p-4 xl:px-16">
          <h2 className="mt-4 lg:mt-8 xl:mt-12 flex flex-col xl:flex-row xl:gap-2 xl:justify-center uppercase text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">
            <span className="">Why you need this</span>
            <span className="text-[#DC2626]">Course</span>
          </h2>
          <p className="p-2 xl:p-4 sm:text-lg lg:text-xl xl:text-lg text-center font-medium xl:font-normal">This course is designed to overcome the addiction of porn & masterbation.</p>
          {/* FEATURES CARD */}
          <div className="p-4 px-0 lg:p-6 lg:px-0 gap-4 sm:gap-6 flex flex-wrap lg:justify-between">
            {featuresCard.map((item, index) => (
              <Features
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* CURRICULUM */}
        <div id="curriculum" className="w-full h-full p-4 pb-6 sm:px-8 lg:p-8 xl:p-12 xl:px-16 flex gap-8">
          <div className="w-[45%] hidden xl:block">
            <aside className="sticky top-10">
              <img className="w-full rounded-2xl border-2 border-[#DC2626]" src={Author} alt="Brand Logo" />
            </aside>
          </div>
          <div className="xl:w-[55%] relative w-full">
            <h2 className="uppercase flex gap-2 justify-center text-center xl:justify-self-start text-3xl sm:text-4xl lg:text-5xl font-semibold">
              <span>Course</span>
              <span className="text-[#DC2626]">Curriculum</span>
            </h2>
            <p className="text-center text-sm sm:text-base lg:text-lg p-2 lg:p-4 xl:px-16 mt-4 rounded-lg text-[#dadada] bg-[#DC2626]/20">
              5 chapters | Learn through experience
            </p>
            <div className="pt-12 lg:pt-16 px-0 flex flex-col gap-10 lg:gap-16 w-full">
              {courseCards.map((item, index) => (
                <Chapters
                  key={index}
                  chapter={item.chapter}
                  icon={item.icon}
                  chapterName={item.chapterName}
                  topics={item.topics}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div id="pricing" className="w-full h-full">
          <Pricing
            discountPrice={PRICE}
            originalPrice={2500}
            endDate={DISCOUNT_END}
          />
        </div>

        {/* FAQs */}
        <div id="faqs" className="w-full h-full p-2 px-4 sm:px-8 xl:px-40">
          <FAQs />
        </div>

        {/* FOOTER */}
        <Footer />

      </div>
    </>
  );
}

export default App;