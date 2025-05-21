import React, { useState } from "react";
import { FcProcess } from "react-icons/fc";
import Lottie from "lottie-react";
import axios from "axios";
import loadingAnimation from "../assets/loading.json";

const QuoteGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [quoteImageUrl, setQuoteImageUrl] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://inspirobot.me/api?generate=true"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching Quote :", error);
      return null;
    }
  };

  const handleGenerateClick = async () => {
    setLoading(true);
    setQuoteImageUrl(null);

    const fetchPromise = fetchQuote();
    const TimerPromise = wait(4000);

    const quote = await fetchPromise;
    await TimerPromise;

    setQuoteImageUrl(quote);
    setLoading(false);
    setInitialLoad(false); // After first generation, hide intro next time
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-white bg-gradient-to-r from-blue-950 to-gray-900">
      {!loading && initialLoad && (
        <>
          <div className="text-4xl font-bold text-center">
            I'm Quote Generator.
            <div className="pt-5 text-xl font-normal">
              But you can call me clone of InspireBot lol (I am using its API)
            </div>
          </div>

          <img
            src="WiseMan.webp"
            alt="WiseOldMan"
            className="object-contain h-auto mt-10 w-60"
          />

          <button
            onClick={handleGenerateClick}
            className="flex items-center gap-2 px-4 py-2 mt-5 text-white transition-transform bg-gray-700 border active:scale-95 hover:bg-gray-600"
          >
            Generate Quote <FcProcess />
          </button>
        </>
      )}

      {/* Show loading animation */}
      {loading && (
        <div className="lottie-container">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            className="bg-transparent w-72 h-72"
          />
          <p className="mt-4 text-xl">Generating a deep quote...</p>
        </div>
      )}

      {!loading && quoteImageUrl && !initialLoad && (
        <>
          <img
            src={quoteImageUrl}
            alt="Quote Image"
            className="w-[300px] mt-5 rounded-md border border-white shadow-lg"
          />
          <button
            onClick={handleGenerateClick}
            className="flex items-center gap-2 px-4 py-2 mt-5 text-white transition-transform bg-gray-700 border active:scale-95 hover:bg-gray-600"
          >
            Generate Another Quote
          </button>
        </>
      )}
    </div>
  );
};

export default QuoteGenerator;
