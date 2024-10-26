import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQs = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the course about?",
      answer: "The course is designed to help you rewire your brain, quit unhealthy habits, and develop a productive lifestyle using science-backed techniques."
    },
    {
      question: "Who is this course for?",
      answer: "This course is perfect for individuals struggling with addiction or unhealthy habits, and anyone looking to improve focus, productivity, and mental clarity."
    },
    {
      question: "How long is the course?",
      answer: "The course is about 45-60 minutes long, with downloadable resources and actionable strategies that you can apply immediately."
    },
    {
      question: "Can I access the course after purchase?",
      answer: "Yes, once purchased, you will have lifetime access to the course content and any future updates."
    }
  ];

  return (
    <div className="w-full h-full">
      <h2 className="uppercase text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">Frequently asked question</h2>
      <div className="p-8 px-0">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2 p-2 lg:p-4 rounded-lg bg-[#DC2626]/20">
            <button
              onClick={() => toggleFAQs(index)}
              className="w-full text-left p-4 flex justify-between items-center"
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-medium">{faq.question}</span>
              <span className="text-lg sm:text-xl lg:text-2xl">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
            >
              <div className="p-4 sm:text-lg lg:text-xl text-[#DADADA]">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
