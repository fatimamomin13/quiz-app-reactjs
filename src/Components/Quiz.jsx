import React, { useContext, useState } from "react";
import { QuizContext } from "../Context/ContextHolder";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-sky-400 to-pink-500">
      <Box current={current} next={setCurrent} />
    </div>
  );
}

const Box = ({ current, next }) => {
  const { quizData, correct, setCorrect, setExit } = useContext(QuizContext);
  const [selected, setSelected] = useState("");
  const saveHandler = () => {
    if (quizData[current].correct === selected) {
      setCorrect(correct + 1);
    }
    setSelected("");
    if (current + 1 === quizData.length) {
      setExit(true);
    } else {
      next(current + 1);
    }
  };
  return (
    <div className="w-[80%] sm:w-[40%] border shadow-lg rounded-md overflow-hidden bg-white">
      <div className="p-2 text-3xl text-center">
        {" "}
        {quizData[current].question}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 m-2 gap-2 ">
        <div
          className={`p-2 border rounded ${
            selected === "a" ? "bg-pink-300" : ""
          } hover:bg-pink-300 hover duration-200 cursor-pointer`}
          onClick={() => setSelected("a")}
        >
          {quizData[current].a}
        </div>
        <div
          className={`p-2 border rounded ${
            selected === "b" ? "bg-pink-300" : ""
          } hover:bg-pink-300 hover duration-200 cursor-pointer`}
          onClick={() => setSelected("b")}
        >
          {quizData[current].b}
        </div>
        <div
          className={`p-2 border rounded ${
            selected === "c" ? "bg-pink-300" : ""
          } hover:bg-pink-300 hover duration-200 cursor-pointer`}
          onClick={() => setSelected("c")}
        >
          {quizData[current].c}
        </div>
        <div
          className={`p-2 border rounded ${
            selected === "d" ? "bg-pink-300" : ""
          } hover:bg-pink-300 hover duration-200 cursor-pointer`}
          onClick={() => setSelected("d")}
        >
          {quizData[current].d}
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="cursor-pointer border rounded shadow text-2xl px-3 my-3 bg-sky-300 hover:bg-sky-400"
          onClick={saveHandler}
        >
          Next
        </div>
      </div>
    </div>
  );
};
