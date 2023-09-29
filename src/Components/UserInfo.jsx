import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import leftArrow from "../assets/HomepageArrow.png";
import eye from "../assets/eye.png";
import home from "../assets/home.png";
import st from "../assets/setting.png";
import pdf from "../assets/pdf.png";
import share from "../assets/share.png";
import play from "../assets/play.png";
import { useLocation, useNavigate } from "react-router-dom";
import { locationRoute } from "./Location";

const UserInfo = () => {
  let [currentUser, setCurrentUser] = useState({});
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(data);
  }, []);

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
        </div>

        <div id="bubbleCreate">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div id="score-points">
          <p>your Score</p>
          <p>
            {Object.keys(currentUser).length === 0 ? "" : currentUser.points}
            <sub>pt</sub>
          </p>
        </div>
      </WRAPPER>

      <DETAILS>
        <div className="Dashboard">
          <div className="complete">
            <p>100%</p>
            <p>Completion</p>
          </div>
          <div className="complete">
            <p>
              {Object.keys(currentUser).length === 0
                ? ""
                : currentUser.totalQuestion
                ? currentUser.totalQuestion
                : "Not attempt"}
            </p>
            <p>Total Questions</p>
          </div>
          <div className="right">
            <p>
              {Object.keys(currentUser).length === 0
                ? ""
                : currentUser.rightAns
                ? currentUser.rightAns
                : "0"}
            </p>
            <p>Carrect</p>
          </div>
          <div className="wrong">
            <p>
              {Object.keys(currentUser).length === 0
                ? ""
                : currentUser.wrongAns
                ? currentUser.wrongAns
                : "0"}
            </p>
            <p>Wrong</p>
          </div>
        </div>

        <div id="dt">
          <div
            onClick={() => {
              locationRoute(location.pathname);
              navigate("/");
            }}
          >
            <img src={play} alt="" />
            <p>Play Again</p>
          </div>
          <div>
            <img src={eye} alt="" />
            <p>Review Answer</p>
          </div>
          <div>
            <img src={share} alt="" />
            <p>Share Score</p>
          </div>
          <div>
            <img src={pdf} alt="" />
            <p>Generate PDF</p>
          </div>
          <div
            onClick={() => {
              locationRoute(location.pathname);
              navigate("/");
            }}
          >
            <img src={home} alt="" />
            <p>Home</p>
          </div>
          <div
            onClick={() => {
              locationRoute(location.pathname);
              navigate("/leaderboard");
            }}
          >
            <img src={st} alt="" />
            <p>Leaderboard</p>
          </div>
        </div>
      </DETAILS>
    </>
  );
};

export default UserInfo;

const DETAILS = styled.div`
  .Dashboard {
    width: 80%;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    position: relative;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%);
    background-color: #ffffff;
    border-radius: 31px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
    text-align: center;
    div > p:nth-child(1) {
      font-weight: 600;
    }
    div > p:nth-child(2) {
      font-size: 0.8rem;
    }
  }

  .complete > p:nth-child(1) {
    color: #ffc102;
    position: relative;
  }
  .right > p:nth-child(1) {
    color: green;
  }
  .wrong > p:nth-child(1) {
    color: red;
  }

  #dt {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 2rem;
    padding-bottom: 5rem;
    text-align: center;
  }
  #dt > div {
    cursor: pointer;
  }
  #dt > div > p {
    font-size: 0.8rem;
  }

  #dt > div > img {
    background-color: #ffc102;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    object-fit: contain;
    padding: 5px;
  }
`;

const WRAPPER = styled.div`
  height: 50vh;
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

  #score-points {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    top: 10%;
    width: 7rem;
    height: 7rem;
    border-radius: 100%;
    background-color: white;
    outline: 12px solid #ffffff58;
    display: grid;
    place-content: center;
    font-weight: 600;
    color: #ffc102;
    text-align: center;
  }
  #score-points > p:nth-child(2) {
    font-size: 1.5rem;
  }
`;
