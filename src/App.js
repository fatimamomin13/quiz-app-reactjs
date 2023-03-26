import React, { useContext } from "react";
import { QuizContext } from "./Context/ContextHolder";
import Start from "./Components/Start";
import Result from "./Components/Result";
import Quiz from "./Components/Quiz";

function App() {
  const { start, exit } = useContext(QuizContext);

  return (
    <>
      {exit === false ? (
        <>{start === true ? <Quiz /> : <Start />}</>
      ) : (
        <Result />
      )}
    </>
  );
}

export default App;
