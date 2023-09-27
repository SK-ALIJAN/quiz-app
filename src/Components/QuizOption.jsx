import React, { useState } from "react";
import styled from "styled-components";
import Option from "./Option";

const QuizOption = ({ correct_answer, incorrect_answers, handleClick }) => {
  let AllOptions = [correct_answer, ...incorrect_answers];
  return (
    <DIV>
      {AllOptions.map((ele) => {
        return <>{<Option key={ele} ele={ele} handleClick={handleClick} />}</>;
      })}
    </DIV>
  );
};

export default QuizOption;

let DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;

  div {
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid #ffc102;
    border-radius: 11px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div:hover {
    background-color: #ffc102;
    color: white;
  }
`;
