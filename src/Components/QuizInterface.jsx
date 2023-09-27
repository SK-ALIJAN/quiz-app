import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import leftArrow from "../assets/HomepageArrow.png";
import vector from "../assets/Vector.png";
import QuizOption from "./QuizOption";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../ContextApi";
import { locationRoute } from "./Location";

const QuizInterface = ({ data }) => {
  let [step, setStep] = useState(1);
  let [currentQuize, setCurrentQuiz] = useState({});
  let [marks, setMarks] = useState(0);
  let [wrongAnswer, setWrongAnswer] = useState(0);
  let [quizfinish, setQuizFinish] = useState(false);
  let [countQuestions, setCountQuestions] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();
  let { userScoreUpdate } = useContext(Context);

  useEffect(() => {
    let FilterQuestion = data.filter((ele, index) => {
      return index + 1 === step;
    });
    setCurrentQuiz(FilterQuestion);
    // Timer();

    if (data.length === step) {
      setQuizFinish(true);
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));

      //  questions number
      if (!currentUser.totalQuestion) {
        currentUser.totalQuestion = countQuestions;
      } else {
        currentUser.totalQuestion = currentUser.totalQuestion + countQuestions;
      }

      //  total points
      if (!currentUser.points) {
        currentUser.points = marks * 10;
      } else {
        currentUser.points = currentUser.points + marks * 10;
      }

      // total right answer
      if (!currentUser.rightAns) {
        currentUser.rightAns = marks;
      } else {
        currentUser.rightAns = currentUser.rightAns + marks;
      }
      // total wrong answer
      if (!currentUser.wrongAns) {
        currentUser.wrongAns = wrongAnswer;
      } else {
        currentUser.wrongAns = currentUser.wrongAns + wrongAnswer;
      }

      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      let obj = { points: marks * 10 };
      userScoreUpdate(obj, Number(currentUser.id));
      setTimeout(() => {
        locationRoute(location.pathname);
        navigate("/");
      }, 3000);
    }

    let id = setTimeout(() => {
      if (data.length > step) {
        setStep((prev) => {
          return prev + 1;
        });
      } else {
        console.log("submit quiz");
      }
    }, 20000);

    return () => {
      clearTimeout(id);
    }; // cleanup function
  }, [step]);

  let handleClick = (ClickedAnswer) => {
    // track how many question touch
    setCountQuestions((prev) => prev + 1);
    // check answer was right or not
    let answer = currentQuize[0].correct_answer === ClickedAnswer;
    // increment scrore
    if (answer) {
      setMarks((prev) => prev + 1);
    } else {
      setWrongAnswer((prev) => prev + 1);
    }

    // after click i change question
    setTimeout(() => {
      if (data.length > step) {
        setStep((prev) => prev + 1);
      }
    }, 1000);
    return answer;
  };

  return (
    <>
      <WRAPPER>
        <div className="firstLine">
          <img
            src={leftArrow}
            alt="sss"
            className="arrowImage"
            onClick={() => {
              let router = localStorage.getItem("location");
              navigate(router);
            }}
          />
          <img src={vector} alt="" className="arrowImage" />
        </div>

        <div id="bubbleCreate">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </WRAPPER>

      <QUIZ>
        <div className="FirstOne">
          <div className="number">
            <div className="green">
              <p>{marks}</p>
              <div className="greenline"></div>
            </div>

            <div className="Timer">
              <div>{marks * 10}</div>
            </div>

            <div className="red">
              <div className="redline"></div>
              <p>{wrongAnswer}</p>
            </div>
          </div>

          <p className="remainQuestion">
            Questions {step}/{data.length}
          </p>

          <p id="quizQuestion">
            {Object.keys(currentQuize).length === 0
              ? ""
              : currentQuize[0].question}
          </p>
        </div>

        <>
          {Object.keys(currentQuize).length === 0 ? (
            ""
          ) : (
            <QuizOption {...currentQuize[0]} handleClick={handleClick} />
          )}
        </>
      </QUIZ>

      {quizfinish ? (
        <Modal>
          <ModalContent>
            <h2>Thank you for your participant</h2>
            <h3 className="score">Your Score is {marks * 10}/100</h3>
            <h3>FeedBack</h3>
            <p>
              {marks < 4
                ? " Opps! Vary low score"
                : marks > 4 && marks <= 6
                ? "You need to more Practice"
                : "Excellent score"}
            </p>
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default QuizInterface;

const WRAPPER = styled.div`
  height: 40vh;
  background-color: #ffc102;
  padding: 2rem;
  border-bottom-left-radius: 21%;
  border-bottom-right-radius: 21%;
  .firstLine {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrowImage {
    cursor: pointer;
  }
  #bubbleCreate {
    position: relative;
    z-index: 2;
  }
  #bubbleCreate > div:nth-child(1) {
    content: "";
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    padding: 2rem;
    background-color: #fca504cf;
    position: absolute;
    z-index: -1;
    top: -120px;
    left: 40%;
  }
  #bubbleCreate > div:nth-child(2) {
    content: "";
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    padding: 2rem;
    background-color: #fca504cf;
    position: absolute;
    z-index: -1;
    left: 70%;
    top: -50px;
  }
  #bubbleCreate > div:nth-child(3) {
    content: "";
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    padding: 2rem;
    background-color: #fca504cf;
    position: absolute;
    z-index: -1;
    top: 50px;
    left: -100px;
  }

  #bubbleCreate > div:nth-child(4) {
    content: "";
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    padding: 2rem;
    background-color: #fca504cf;
    position: absolute;
    z-index: -1;
    left: 90%;
    top: 100px;
  }
`;

const QUIZ = styled.div`
  .FirstOne {
    background-color: #ffffff;
    width: 70%;
    position: relative;
    bottom: 80px;
    left: 50%;
    transform: translate(-50%);
    padding: 30px;
    border-radius: 31px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
    padding-bottom: 40px;
  }

  .number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 600;
    position: relative;
  }

  .green {
    color: green;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    .greenline {
      width: 2rem;
      height: 13px;
      background-color: green;
      margin-left: 10px;
      border-radius: 11px;
    }
  }

  .Timer {
    width: 4rem;
    height: 4rem;
    background-color: #ffffff;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -200%;
    padding: 5px;
  }
  .Timer div {
    width: 3.5rem;
    height: 3.5rem;
    border: 2px solid #ffc102;
    border-radius: 100%;
    display: grid;
    place-content: center;
  }

  .red {
    color: red;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    .redline {
      width: 2rem;
      height: 13px;
      background-color: red;
      margin-right: 10px;
      border-radius: 11px;
    }
  }

  .remainQuestion {
    text-align: center;
    font-weight: 600;
    color: #ffc102;
    font-size: 14px;
    margin-bottom: 30px;
  }

  #quizQuestion {
    font-weight: 600;
    text-align: center;
  }
`;

const Modal = styled.div`
  background-color: #070707;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4 !important;
`;

const ModalContent = styled.div`
  padding: 3rem;
  background-color: #ffc102;
  border-radius: 11px;
  position: relative;
  text-align: center;
  .score {
    background-color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 7px;
    margin-bottom: 20px;
  }
`;
