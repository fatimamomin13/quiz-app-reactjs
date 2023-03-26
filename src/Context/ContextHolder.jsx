import React, { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

const quizData = [
  {
    question: "What is the scientific name of a butterfly?",
    a: "Apis",
    b: "Coleoptera",
    c: "Formicidae",
    d: "Rhopalocera",
    correct: "d",
  },
  {
    question: "How hot is the surface of the sun?",
    a: "1,233 K",
    b: "5,778 K",
    c: "12,130 K",
    d: "101,300 K",
    correct: "b",
  },
  {
    question: "Who are the actors in The Internship?",
    a: "Ben Stiller, Jonah Hill",
    b: "Courteney Cox, Matt LeBlanc",
    c: "Kaley Cuoco, Jim Parsons",
    d: "Vince Vaughn, Owen Wilson",
    correct: "d",
  },
  {
    question: "What is the capital of Spain?",
    a: "Berlin",
    b: "Buenos Aires",
    c: "Madrid",
    d: "San Juan",
    correct: "c",
  },
  {
    question:
      "What are the school colors of the University of Texas at Austin?",
    a: "Black, Red",
    b: "Blue, Orange",
    c: "White, Burnt Orange",
    d: "White, Old gold, Gold",
    correct: "c",
  },
  {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    a: "18.8889",
    b: "20",
    c: "21.1111",
    d: "158",
    correct: "c",
  },
];

export default function ContextHolder(props) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  return (
    <QuizContext.Provider
      value={{
        start,
        exit,
        setStart,
        setExit,
        quizData,
        correct,
        setCorrect,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}

export { QuizContext };
