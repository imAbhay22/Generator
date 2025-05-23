import React, { useState, useEffect } from "react";
import { FcProcess } from "react-icons/fc";
import Lottie from "lottie-react";
import axios from "axios";
import loadingAnimation from "../assets/loading.json";

const QuoteGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [quoteImageUrl, setQuoteImageUrl] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    setSavedQuotes(storedQuotes);
  }, []);

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

  const handleSavedQuote = async () => {
    if (quoteImageUrl) {
      const saved = JSON.parse(localStorage.getItem("savedQuotes")) || [];

      if (!saved.includes(quoteImageUrl)) {
        const updated = [...saved, quoteImageUrl];
        localStorage.setItem("savedQuotes", JSON.stringify(updated));
        setSavedQuotes(updated);
        setIsSaved(true);
      }
    }
  };
  const handleUnsaveQuote = (quoteUrlToRemove) => {
    const updatedQuotes = savedQuotes.filter(
      (quote) => quote !== quoteUrlToRemove
    );
    localStorage.setItem("savedQuotes", JSON.stringify(updatedQuotes));
    setSavedQuotes(updatedQuotes);
  };

  const handleGenerateClick = async () => {
    setLoading(true);
    setQuoteImageUrl(null);
    setIsSaved(false);

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
          <div className="relative mt-5">
            <img
              src={quoteImageUrl}
              alt="Quote Image"
              className="w-[300px] mt-5 rounded-md border border-white shadow-lg"
            />
            <button
              onClick={handleSavedQuote}
              className={`absolute top-2 right-2 text-sm px-3 py-1 rounded ${
                isSaved ? "bg-green-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {isSaved ? "Saved!" : "Save"}
            </button>
          </div>
          <button
            onClick={handleGenerateClick}
            className="flex items-center gap-2 px-4 py-2 mt-5 text-white transition-transform bg-gray-700 border active:scale-95 hover:bg-gray-600"
          >
            Generate Another Quote
          </button>
        </>
      )}
      {savedQuotes.length > 0 && (
        <div className="w-full max-w-3xl mt-10">
          <h2 className="mb-4 text-2xl font-bold text-center">Saved Quotes</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {savedQuotes.map((quoteUrl, index) => (
              <div key={index} className="relative">
                <img
                  src={quoteUrl}
                  alt={`Saved quote ${index}`}
                  className="w-full border border-white rounded-md shadow-lg"
                />
                <button
                  onClick={() => handleUnsaveQuote(quoteUrl)}
                  className="absolute px-2 py-1 text-xs text-white bg-red-600 rounded top-2 right-2 hover:bg-red-700"
                >
                  Unsave
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;
