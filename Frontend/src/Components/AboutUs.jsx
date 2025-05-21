import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen px-4 py-10 text-white bg-gradient-to-r from-gray-900 to-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold">About Us</h1>

        <p className="mb-6 text-lg">
          Welcome to our little hub of humor and inspiration!
        </p>

        <div className="text-left bg-[#1E1F2F] p-6 rounded-lg shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-yellow-400">
            🤖 Quote Generator
          </h2>
          <p className="mb-4">
            Our Quote Generator uses the <strong>InspiroBot API</strong> to
            fetch AI-generated motivational and philosophical quotes. Each time
            you click the button, a new quote image is generated to inspire
            you—or make you laugh at how deep it sounds!
          </p>

          <h2 className="mb-2 text-2xl font-semibold text-green-400">
            😂 Joke Generator
          </h2>
          <p>
            The Joke Generator uses a joke API to bring a smile to your face
            with random programming or general jokes. It’s quick fun for those
            moments when you just need a good chuckle!
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Created with 💖 by a curious coder for fun and practice.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
