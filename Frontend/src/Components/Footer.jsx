import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1E1F2F] text-white py-10 px-4">
      <div className="flex flex-col items-center max-w-4xl gap-6 mx-auto text-center">
        <p className="text-xl sm:text-2xl">
          <span className="text-3xl font-semibold">Hello,</span> we can become
          friends if you
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* My Instagram */}
          <a
            href="https://www.instagram.com/im._Abhay_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-500 transition-colors hover:text-pink-400"
          >
            <FaInstagram size={24} />
            My Instagram
          </a>

          {/* InspiroBot's Twitter */}
          <a
            href="https://x.com/intent/follow?original_referer=https%3A%2F%2Finspirobot.me%2F&screen_name=TheInspiroBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
          >
            Api Owner:
            <FaXTwitter size={24} />
            TheInspiroBot
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
