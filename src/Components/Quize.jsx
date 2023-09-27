import React, { useContext, useEffect, useState } from "react";
import { Context } from "../ContextApi";
import { styled } from "styled-components";
import QuizInterface from "./QuizInterface";

const Quize = () => {
  let { data } = useContext(Context);
  let [quiz, setQuiz] = useState([]);


  useEffect(() => {
    let datas = JSON.parse(localStorage.getItem("quiz")) || [];
    setQuiz(datas);   // bugs here
    if (data.length !== 0) {
      localStorage.setItem("quiz", JSON.stringify(data));
      setQuiz(data);
    }
  }, [data]);

  return (
    <>
      {quiz.length === 0 ? (
        <LOADER className="loader"></LOADER>
      ) : (
        <QuizInterface data={quiz} />
      )}
    </>
  );
};

export default Quize;

let LOADER = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: transparent;
  width: 4rem;
  height: 4rem;
  animation: spin89345 1s linear infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
