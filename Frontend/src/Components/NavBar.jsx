import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Determine which page we're on
  const isQuotePage = location.pathname === "/";
  const isJokePage = location.pathname === "/jokes";
  const isFactPage = location.pathname === "/facts";

  return (
    <div className="sticky top-0 z-50 px-4 py-5 mx-auto text-white md:px-8 bg-gradient-to-r from-blue-950 to-gray-900 border-b-[1px] border-gray-700">
      <div className="flex items-center justify-between">
        {/* Conditional Logo */}
        <div className="text-xl font-bold">
          {isQuotePage && "Quote Generator 🤖"}
          {isJokePage && "Joke Generator 😂"}
          {isFactPage && "Facts Generator 🎭"}
          {!isQuotePage && !isJokePage && !isFactPage && "About Us 🎭"}
        </div>

        <div className="flex gap-5 md:gap-10">
          <Link
            to="/"
            className="font-semibold transition-colors hover:text-yellow-400"
          >
            QuoteBot
          </Link>
          <Link
            to="/jokes"
            className="font-semibold transition-colors hover:text-green-400"
          >
            JokeBot
          </Link>
          <Link
            to="/facts"
            className="font-semibold transition-colors hover:text-pink-400"
          >
            FactsBot
          </Link>
          <Link
            to="/about"
            className="font-semibold transition transform cursor-pointer active:scale-90 hover:scale-105"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
