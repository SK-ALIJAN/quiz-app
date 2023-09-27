import React from "react";
import { styled } from "styled-components";
import leftArrow from "../assets/HomepageArrow.png";
import girl from "../assets/girl.png";
import { useNavigate } from "react-router-dom";

const LeaderBoard = () => {
  let Navigate = useNavigate();

  return (
    <>
      <WRAPPER>
        <div className="firstLine">
          <img src={leftArrow} alt="sss" className="arrowImage" />
          <img
            src={girl}
            alt="girl"
            onClick={() => {
              Navigate("/Info");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div id="bubbleCreate">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="Date">
          <p>Today</p>
          <p>Month</p>
          <p>All Times</p>
        </div>

        <div className="rank">
          <div className="second">
            <p>2</p>
          </div>
          <div className="first">
            <p>1</p>
          </div>
          <div className="third">
            <p>3</p>
          </div>
        </div>
      </WRAPPER>
    </>
  );
};

export default LeaderBoard;

const WRAPPER = styled.div`
  height: 80vh;
  background-color: #ffc102;
  padding: 2rem;
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

  .Date {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-weight: 600;
    color: white;
  }
  .Date > P:nth-child(1) {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .Date > P:nth-child(2),
  .Date > P:nth-child(3) {
    margin-left: 30px;
    cursor: pointer;
  }
  .rank {
    width: 99%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    text-align:center;

    p{
    color:white;
    font-size:4rem;
    }
  }
  .first {
    width: 30%;
    height: 15rem;
    background-color: #D8A800;
    transform: perspective(600px) rotateX(20deg);
    border-radius: 6px;
  }
  .second {
    width: 30%;
    height: 9rem;
    background-color: #D8A800;
    align-self: flex-end;
    transform: perspective(600px) rotateX(20deg);
    border-radius: 6px;
  }
  .third {
    width: 30%;
    height: 9rem;
    background-color: #D8A800;
    align-self: flex-end;
    transform: perspective(600px) rotateX(20deg);
    border-radius: 6px;
  }
`;
