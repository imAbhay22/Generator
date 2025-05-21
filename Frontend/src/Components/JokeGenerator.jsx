import React, { useState } from "react";
import { FcProcess } from "react-icons/fc";
import Lottie from "lottie-react";
import axios from "axios";
import loadingAnimation from "../assets/loading.json";

const JokeGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching Joke:", error);
      return null;
    }
  };

  const handleGenerateClick = async () => {
    setLoading(true);
    setJoke(null);

    const fetchPromise = fetchJoke();
    const timerPromise = wait(2000);

    const jokeData = await fetchPromise;
    await timerPromise;

    setJoke(jokeData);
    setLoading(false);
    setInitialLoad(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-white bg-gradient-to-r from-blue-950 to-gray-900">
      {!loading && initialLoad && (
        <>
          <div className="text-4xl font-bold text-center">
            I'm JokeBot 😂
            <div className="pt-5 text-xl font-normal">
              Making random Dad jokes is my hobby
            </div>
          </div>

          <img
            src="Joke.webp"
            alt="FunnyGuy"
            className="object-contain h-auto mt-10 w-60"
          />

          <button
            onClick={handleGenerateClick}
            className="flex items-center gap-2 px-4 py-2 mt-5 text-white transition-transform bg-gray-700 border active:scale-95 hover:bg-gray-600"
          >
            Tell Me a Joke <FcProcess />
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
          <p className="mt-4 text-xl">Thinking of something funny...</p>
        </div>
      )}

      {!loading && joke && !initialLoad && (
        <>
          <div className="max-w-md px-6 py-4 mt-5 text-xl text-center text-black bg-white rounded-lg shadow-lg">
            <p className="font-semibold">{joke.setup}</p>
            <p className="mt-2 italic">{joke.punchline}</p>
          </div>

          <button
            onClick={handleGenerateClick}
            className="flex items-center gap-2 px-4 py-2 mt-5 text-white transition-transform bg-gray-700 border active:scale-95 hover:bg-gray-600"
          >
            Tell Another Joke <FcProcess />
          </button>
        </>
      )}
    </div>
  );
};

export default JokeGenerator;
