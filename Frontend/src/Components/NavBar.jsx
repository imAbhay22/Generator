import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: for hamburger icons

const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isQuotePage = location.pathname === "/";
  const isJokePage = location.pathname === "/jokes";
  const isFactPage = location.pathname === "/facts";

  return (
    <div className="sticky top-0 z-50 px-4 py-5 mx-auto text-white border-b border-gray-700 bg-gradient-to-r from-blue-950 to-gray-900">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          {isQuotePage && "Quote Generator 🤖"}
          {isJokePage && "Joke Generator 😂"}
          {isFactPage && "Facts Generator 🎭"}
          {!isQuotePage && !isJokePage && !isFactPage && "About Us 🎭"}
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-5 md:flex">
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
            className="font-semibold transition transform active:scale-90 hover:scale-105"
          >
            About Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="font-semibold transition-colors hover:text-yellow-400"
          >
            QuoteBot
          </Link>
          <Link
            to="/jokes"
            onClick={() => setMenuOpen(false)}
            className="font-semibold transition-colors hover:text-green-400"
          >
            JokeBot
          </Link>
          <Link
            to="/facts"
            onClick={() => setMenuOpen(false)}
            className="font-semibold transition-colors hover:text-pink-400"
          >
            FactsBot
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="font-semibold transition transform active:scale-90 hover:scale-105"
          >
            About Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
