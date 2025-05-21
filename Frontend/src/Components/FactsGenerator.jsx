import React, { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";
import { FcProcess } from "react-icons/fc";

const FactsGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchFact = async () => {
    try {
      const response = await axios.get(
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
      );
      return response.data.text;
    } catch (error) {
      console.error("Error fetching fact:", error);
      return "Oops! Couldn't fetch a fact this time.";
    }
  };

  const handleGenerateClick = async () => {
    setLoading(true);
    setFact("");

    const fetchPromise = fetchFact();
    const TimerPromise = wait(2500); // Just for fun animation

    const newFact = await fetchPromise;
    await TimerPromise;

    setFact(newFact);
    setLoading(false);
    setInitialLoad(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-white bg-gradient-to-r from-blue-950 to-gray-900">
      {!loading && initialLoad && (
        <>
          <div className="text-4xl font-bold text-center">
            I'm Facts Bot.
            <div className="pt-5 text-xl font-normal">
              I deliver random facts you may or may not need 😄
            </div>
          </div>

          <img
            src="Fact.webp"
            alt="WiseOldMan"
            className="object-contain h-auto mt-10 w-60"
          />

          <button
            onClick={handleGenerateClick}
            className="flex items-center gap-2 px-4 py-2 mt-5 text-white transition-transform bg-gray-700 border active:scale-95 hover:bg-gray-600"
          >
            Generate Fact <FcProcess />
          </button>
        </>
      )}

      {loading && (
        <div className="lottie-container">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            className="bg-transparent w-72 h-72"
          />
          <p className="mt-4 text-xl">Fetching a useless (but fun) fact...</p>
        </div>
      )}

      {!loading && fact && !initialLoad && (
        <>
          <p className="max-w-2xl mt-8 text-xl text-center">{fact}</p>
          <button
            onClick={handleGenerateClick}
            className="flex items-center gap-2 px-4 py-2 mt-5 text-white transition-transform bg-gray-700 border active:scale-95 hover:bg-gray-600"
          >
            Generate Another Fact
          </button>
        </>
      )}
    </div>
  );
};

export default FactsGenerator;
