import React, { useEffect, useState, useContext } from "react";
import { Context } from "../ContextApi";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import leftArrow from "../assets/HomepageArrow.png";
import girl from "../assets/girl.png";
import Space from "../assets/Space.png";
import history from "../assets/History.png";
import Sports from "../assets/Sports.png";
import { locationRoute } from "./Location";

const AllCategory = [
  {
    name: "History",
    code: 23,
    image: history,
  },

  {
    name: "Sports",
    code: 21,
    image: Sports,
  },
  {
    name: "Geography",
    code: 22,
    image: history,
  },
  {
    name: "Politics",
    code: 24,
    image: Space,
  },

  {
    name: "Arts",
    code: 25,
    image: history,
  },

  {
    name: "Celebraties",
    code: 26,
    image: Sports,
  },

  {
    name: "Animals",
    code: 27,
    image: Space,
  },

  {
    name: "Computer",
    code: 18,
    image: history,
  },

  {
    name: "Film",
    code: 24,
    image: Sports,
  },
];

const Home = () => {
  let [user, setUser] = useState({});
  let { quiz } = useContext(Context);
  let Navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("currentUser"));
    setUser(data);
  }, []);

  // some hard coded data
  let handleSpace = () => {
    quiz(17);
    locationRoute(location.pathname);
    Navigate("/quiz");
  };
  let handleHistory = () => {
    quiz(23);
    locationRoute(location.pathname);
    Navigate("/quiz");
  };
  let handleSports = () => {
    quiz(21);
    locationRoute(location.pathname);
    Navigate("/quiz");
  };

  return (
    <>
      <WRAPPER>
        <div className="Heading">
          <div className="firstLine">
            <img src={leftArrow} alt="sss" className="arrowImage" />
            <p id="bubbleCreate">Hello {user.name}</p>
            <img
              src={girl}
              alt="girl"
              onClick={() => {
                locationRoute(location.pathname);
                Navigate("/Info");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="secondLine">
            <p className="popular">popular</p>

            <div className="secondlineChildContainer">
              <div className="secondLine-child" onClick={handleSpace}>
                <p>Space</p>
                <img src={Space} alt="space" />
              </div>
              <div className="secondLine-child" onClick={handleHistory}>
                <p>History</p>
                <img src={history} alt="history" />
              </div>
              <div
                className="secondLine-child"
                id="lastBubble"
                onClick={handleSports}
              >
                <p>Sports</p>
                <img src={Sports} alt="sports" />
              </div>
            </div>
          </div>
        </div>
      </WRAPPER>

      <CATEGORY>
        <div className="header">
          <p>Expore</p>
          <p>View all</p>
        </div>

        <div className="allCategory">
          {AllCategory.map((ele) => {
            return (
              <div
                key={ele.name}
                onClick={() => {
                  quiz(ele.code);
                  locationRoute(location.pathname);
                  Navigate("/quiz");
                }}
              >
                <p>{ele.name}</p>
                <img src={ele.image} alt={ele.name} />
              </div>
            );
          })}
        </div>
      </CATEGORY>
    </>
  );
};

export default Home;

const WRAPPER = styled.div`
  .Heading {
    background-color: #ffc102;
    border-bottom-left-radius: 31px;
    border-bottom-right-radius: 31px;
    padding: 2rem;
  }
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
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    z-index: 2;
  }
  #bubbleCreate::before {
    content: "";
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    padding: 2rem;
    padding: 2rem;
    background-color: #fca504cf;
    position: absolute;
    z-index: -1;
    top: -400%;
    left: -140%;
  }
  #bubbleCreate::after {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 100%;
    padding: 2rem;
    padding: 2rem;
    background-color: #fca504cf;
    position: absolute;
    z-index: -1;
    top: -150%;
    left: 200%;
  }

  .secondLine {
    margin-top: 2rem;
  }
  .popular {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    position: relative;
    z-index: 2;
  }
  .popular::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    padding: 2rem;
    padding: 2rem;
    background-color: #fca504cf;
    position: absolute;
    z-index: -1;
    left: -6%;
    top: -150%;
  }

  .secondlineChildContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .secondLine-child {
    background-color: #ffffff;
    color: #444444;
    padding: 30px 50px;
    border-radius: 11px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;

    img {
      margin-top: 10px;
    }
  }

  .secondLine-child:hover {
    background-color: #ffffffbf;
  }

  @media screen and (max-width: 700px) {
    #bubbleCreate::after {
      width: 0.2rem;
      height: 0.2rem;
      padding: 1rem;
    }
    .popular::before {
      width: 0.2rem;
      height: 0.2rem;
      left: -16%;
    }
    .secondLine-child {
      padding: 20px 20px;
    }
  }
`;

const CATEGORY = styled.div`
  padding: 30px;
  margin-top: 10px;
  background-color: #ffffff;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .header > p:nth-child(1) {
    font-weight: 600;
  }
  .header > p:nth-child(2) {
    cursor: pointer;
    font-size: 0.8rem;
  }
  .header > p:nth-child(2):hover {
    color: #fca504cf;
  }
  .allCategory {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-content: center;
  }
  .allCategory > div {
    border: 1px solid #fca504cf;
    text-align: center;
    padding: 30px 40px;
    border-radius: 11px;
    color: #444444;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
  }
  .allCategory > div:hover {
    background-color: #fca5043b;
  }
  .allCategory > div p {
    font-weight: 600;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 700px) {
    .allCategory {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 500px) {
    .allCategory {
      grid-template-columns: repeat(3, 1fr);
      font-size: 0.7rem;
    }
    .allCategory > div {
      padding: 10px;
    }
  }
`;
