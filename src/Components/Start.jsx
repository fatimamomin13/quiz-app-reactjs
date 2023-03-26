import React, { useContext } from "react";
import { QuizContext } from "../Context/ContextHolder";

export default function Start() {
  const { setStart } = useContext(QuizContext);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-sky-400 to-pink-500">
      <div className="w-[80%] sm:w-[30%] bg-white">
        <p className="text-3xl text-center my-3">Let's go</p>
        <div className="flex justify-center items-center">
          <button
            onClick={() => setStart(true)}
            className="border px-3 text-2xl rounded my-3 hover:bg-pink-300"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
