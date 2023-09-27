import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import leftArrow from "../assets/HomepageArrow.png";
import girl from "../assets/girl.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextApi";

const LeaderBoard = () => {
  let Navigate = useNavigate();
  let { GetAllUserData } = useContext(Context);
  let [data, setData] = useState([]);
  let [other, setOther] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    GetAllUserData().then((res) => {
      res.sort((a, b) => {
        return b.points - a.points;
      });
      let data = res.map((ele, index) => {
        if (index > 2) {
          return ele;
        }
      });
      setOther(data);
      setData(res);
    });
  });

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
            {data.length !== 0 ? <h1>{data[1].name}</h1> : ""}
            <p>2</p>
            {data.length !== 0 ? <h3>{data[1].points} pt</h3> : ""}
          </div>
          <div className="first">
            {data.length !== 0 ? <h1>{data[0].name}</h1> : ""}
            <p>1</p>
            {data.length !== 0 ? <h3>{data[0].points} pt</h3> : ""}
          </div>
          <div className="third">
            {data.length !== 0 ? <h1>{data[2].name}</h1> : ""}
            <p>3</p>
            {data.length !== 0 ? <h3>{data[2].points} pt</h3> : ""}
          </div>
        </div>
      </WRAPPER>

      <SCORE>
        {other.length !== 0
          ? other.map((ele, index) => {
              if (ele) {
                return (
                  <div key={index}>
                    <p>0{index + 1}</p>
                    <p>{ele.name}</p>
                    <p className="points">{ele.points}pt</p>
                  </div>
                );
              }
            })
          : ""}
      </SCORE>
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
    text-align: center;
    h1 {
      color: white;
      position: absolute;
      top: -32%;
      left: 50%;
      transform: translate(-50%);
    }
    p {
      color: white;
      font-size: 4rem;
    }
    h3 {
      color: white;
    }
  }
  .first {
    width: 30%;
    height: 15rem;
    background-color: #d8a800;
    transform: perspective(600px) rotateX(20deg);
    border-radius: 6px;
    position: relative;
  }
  .second {
    width: 30%;
    height: 9rem;
    background-color: #d8a800;
    align-self: flex-end;
    transform: perspective(600px) rotateX(20deg);
    border-radius: 6px;
    position: relative;
  }
  .third {
    width: 30%;
    height: 9rem;
    background-color: #d8a800;
    align-self: flex-end;
    transform: perspective(600px) rotateX(20deg);
    border-radius: 6px;
    position: relative;
  }
`;

const SCORE = styled.div`
  padding: 2rem;
  position: relative;
  bottom: 60px;
  background-color: white;
  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
  padding: 20px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    p {
      font-weight: 600;
    }
  }

  .points {
    background-color: #ffc102;
    width: 5rem;
    padding: 5px;
    text-align: center;
    border-radius: 11px;
  }
`;
