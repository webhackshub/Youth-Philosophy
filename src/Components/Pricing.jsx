import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pricing = ({ discountPrice, originalPrice, endDate }) => {

  localStorage.setItem('discountPrice', discountPrice);

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedEndTime = localStorage.getItem('countdownEndTime');

    if (savedEndTime) {
      return Math.max(0, new Date(savedEndTime).getTime() - new Date().getTime());
    }

    const targetEndDate = new Date(endDate).getTime();
    localStorage.setItem('countdownEndTime', new Date(targetEndDate).toISOString());
    return targetEndDate - new Date().getTime();
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const savedEndTime = new Date(localStorage.getItem('countdownEndTime')).getTime();
      const timeRemaining = Math.max(0, savedEndTime - new Date().getTime());
      setTimeLeft(timeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const newEndTime = new Date(endDate).getTime();
    localStorage.setItem('countdownEndTime', new Date(newEndTime).toISOString());
    setTimeLeft(Math.max(0, newEndTime - new Date().getTime()));
  }, [endDate]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  const discountPercentage = Math.round(
    ((originalPrice - discountPrice) / originalPrice) * 100
  );

  return (
    <div className="w-full h-full p-20 px-4 sm:px-8 xl:px-60">
      <div className="w-full p-6 sm:p-8 lg:p-12 rounded-2xl border-2 flex sm:gap-2 flex-col items-center justify-center border-[#DC2626]">
        <h3 className="p-4 px-0 text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">
          {timeLeft > 0 ? (
            <>
              GET AT <span className="text-[#DC2626]">{discountPercentage}%</span> DISCOUNT
            </>
          ) : (
            <>
              GET AT <span className="text-[#DC2626]">0%</span> DISCOUNT
            </>
          )}
        </h3>

        <div className="flex justify-center gap-2 sm:gap-4 text-center mb-4">
          <div className="p-2 sm:p-4 xl:p-6 px-4 sm:px-6 xl:px-8 bg-[#320f0e] rounded-2xl">
            <span className="block text-xl sm:text-2xl font-medium text-[#DC2626]">
              {timeLeft > 0 ? days : 0}
            </span>
            <span className="text-sm sm:text-base font-medium">DAYS</span>
          </div>
          <div className="p-2 sm:p-4 xl:p-6 px-4 sm:px-6 xl:px-8 bg-[#320f0e] rounded-2xl">
            <span className="block text-xl sm:text-2xl font-medium text-[#DC2626]">
              {timeLeft > 0 ? hours : 0}
            </span>
            <span className="text-sm sm:text-base font-medium">HOURS</span>
          </div>
          <div className="p-2 sm:p-4 xl:p-6 px-4 sm:px-6 xl:px-8 bg-[#320f0e] rounded-2xl">
            <span className="block text-xl sm:text-2xl font-medium text-[#DC2626]">
              {timeLeft > 0 ? minutes : 0}
            </span>
            <span className="text-sm sm:text-base font-medium">MINS</span>
          </div>
          <div className="p-2 sm:p-4 xl:p-6 px-4 sm:px-6 xl:px-8 bg-[#320f0e] rounded-2xl">
            <span className="block text-xl sm:text-2xl font-medium text-[#DC2626]">
              {timeLeft > 0 ? seconds : 0}
            </span>
            <span className="text-sm sm:text-base font-medium">SECS</span>
          </div>
        </div>

        <div className="w-full mb-4">
          <Link to="/Form">
            <button className="w-full p-4 sm:p-6 capitalize rounded-full text-sm sm:text-lg lg:text-xl xl:text-lg font-semibold border border-[#DC2626] bg-[#320f0e]">
              {timeLeft > 0 ? (
                <>Enroll now ₹{discountPrice} <span className="line-through text-[#dadada]">₹{originalPrice}</span></>
              ) : (
                <>Enroll now ₹{originalPrice}</>
              )}
            </button>
          </Link>
        </div>

        <p className="sm:text-lg lg:text-xl xl:text-lg text-center capitalize">Secure a seat</p>
      </div>
    </div>
  );
};

export default Pricing;
