import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Brand_Logo from "../assets/images/Brand_Logo.webp";
import Course_Preview from "../assets/images/Course_Preview.webp";

const Form = () => {

  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_DATABASE_CHAT_ID = import.meta.env.VITE_TELEGRAM_DATABASE_CHAT_ID;
  const TELEGRAM_INVITE_LINK_CHAT_ID = import.meta.env.VITE_TELEGRAM_INVITE_LINK_CHAT_ID;
  const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;

  const amount = localStorage.getItem('discountPrice') || 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [webData] = useState({
    currentTab: "Home > Courses > Quit masturbation & porn addiction > Form",
  });

  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    const options = {
      key: RAZORPAY_KEY,
      amount: amount * 100,
      currency: 'INR',
      name: "Youth Philosophy",
      description: "Quit Porn & Masturbation Addiction Course",
      image: Brand_Logo,
      handler: async (response) => {
        await sendUserDataToTelegram(response);
        const inviteLink = await generateInviteLink();

        if (inviteLink) {
          alert("Successfully enrolled. Please! Check your email.");
          await sendEmail(inviteLink);
          navigate("/Course", { state: { inviteLink } });
        } else {
          alert("Failed to generate invite link. We will contact you as soon as possible.");
        }
      },
      prefill: {
        name,
        email,
        phone,
      },
      theme: {
        color: "#DC2626",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const sendUserDataToTelegram = async (paymentDetails) => {
    const messageContent = `
        Course Purchased:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Payment ID: ${paymentDetails.razorpay_payment_id}
        `;
    const botToken = TELEGRAM_BOT_TOKEN;
    const chatId = TELEGRAM_DATABASE_CHAT_ID;
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: messageContent,
    });
  };

  const generateInviteLink = async () => {
    const botToken = TELEGRAM_BOT_TOKEN;
    const chatId = TELEGRAM_INVITE_LINK_CHAT_ID;
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/createChatInviteLink`;

    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: chatId,
        expire_date: Math.floor(Date.now() / 1000) + 86400,
        member_limit: 1,
      });
      const inviteLink = response.data.result.invite_link;
      return inviteLink;
    } catch (error) {
      console.error("Error generating invite link:", error);
      return null;
    }
  };

  const sendEmail = async (inviteLink) => {
    const brevoApiKey = BREVO_API_KEY;
    const emailData = {
      sender: { email: "pvt.suraj37@gmail.com", name: "Youth Philosophy" },
      to: [{ email: email, name: name }],
      subject: "Succesfully enrolled in the course!",
      htmlContent: `<p>Hello ${name},</p><p>Thank you for enrolling in our Quit Porn & Masturbation Addiction course. Here is your course link:</p><button><a href="${inviteLink}">Join Now</a></button><p>Best regards,<br>Youth Philosophy</p>`,
    };

    try {
      const response = await axios.post("https://api.brevo.com/v3/smtp/email", emailData, {
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
      });
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="w-full h-screen text-white bg-[#111111] font-[Poppins]">
      <Navbar />
      <div className="w-full p-4 sm:px-8 xl:px-16 pb-0 xl:pb-4 flex flex-col gap-4">
        <span className="sm:text-lg lg:text-xl xl:text-base lg:p-2 lg:px-0 xl:p-0">{webData.currentTab}</span>
        <div className="xl:flex xl:flex-row xl:gap-12 xl:px-0 xl:p-8">
          <div className="w-full xl:w-[60%] h-[25vh] lg:h-[35vh] xl:h-full">
            <img
              className="w-full h-full object-cover object-center"
              src={Course_Preview}
              alt="Quit masturbation & porn addiction course"
            />
          </div>
          <p className="sm:text-lg lg:text-2xl lg:p-6 lg:pt-10 pt-4 text-center font-medium uppercase xl:hidden">
            After successful payment you will get the link of the course.
          </p>
          <div className="w-full xl:w-[40%] p-4 px-0 sm:px-6 sm:pb-8 xl:p-2 xl:px-0">
            <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handlePayment}>
              <input
                className="w-full p-4 sm:p-6 lg:p-7 xl:p-4 text-sm sm:text-lg lg:text-2xl xl:text-base rounded-lg border-none outline-none capitalize bg-[#1f1f1f]"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full p-4 sm:p-6 lg:p-7 xl:p-4 text-sm sm:text-lg lg:text-2xl xl:text-base rounded-lg border-none outline-none bg-[#1f1f1f]"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="w-full p-4 sm:p-6 lg:p-7 xl:p-4 text-sm sm:text-lg lg:text-2xl xl:text-base rounded-lg border-none outline-none bg-[#1f1f1f]"
                type="tel"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button
                className="p-4 sm:p-6 lg:p-7 xl:p-4 text-sm sm:text-lg lg:text-2xl xl:text-base rounded-lg font-medium uppercase text-white bg-[#DC2626]"
                type="submit"
              >
                Enroll now ₹750{" "}
                <span className="line-through text-[#dadada]">₹2500</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
