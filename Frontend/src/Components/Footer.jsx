import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="text-xl text-center text-white bg-[#1E1F2F] h-[30vh] flex flex-col justify-center items-center gap-3">
        <div>
          <span className="text-3xl font-semibold">Hello,</span> we can become
          friends if you
        </div>
        <div className="flex items-center gap-4">
          {/* My Instagram */}
          <a
            href="https://www.instagram.com/im._Abhay_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-pink-500 transition-colors hover:text-pink-400"
          >
            <FaInstagram size={24} />
            My Instagram
          </a>

          {/* InspiroBot's Twitter */}
          <a
            href="https://x.com/intent/follow?original_referer=https%3A%2F%2Finspirobot.me%2F&screen_name=TheInspiroBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 transition-colors hover:text-blue-300"
          >
            Api Owner :
            <FaXTwitter size={24} />
            TheInspiroBot
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
