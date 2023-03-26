import React, { useContext } from "react";
import { QuizContext } from "../Context/ContextHolder";

export default function Result() {
  const { correct, setExit, setStart, quizData } = useContext(QuizContext);
  const playAgain = () => {
    setExit(false);
    setStart(false);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-sky-400 to-pink-500">
      <div className="w-[80%] sm:w-[30%] border shadow-lg rounded-md overflow-hidden text-center bg-white">
        <h2 className="text-2xl p-3 my-2">
          {correct} are correct out of {quizData.length}
        </h2>
        <button
          onClick={playAgain}
          className="border my-3 hover:bg-pink-300 px-3 py-1 text-2xl rounded"
        >
          Play agian
        </button>
      </div>
    </div>
  );
}
