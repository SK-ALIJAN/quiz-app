import React, { useState, useContext } from "react";
import { styled } from "styled-components";
import signupImage from "../assets/signup.png";
import { Context } from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [inputdata, setInputData] = useState({
    name: "",
    city: "",
  });
  let Navigate = useNavigate();
  let { UserData } = useContext(Context);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    // add new user to database with point 0;
    let data = {
      ...inputdata,
      points: 0,
    };
    let userData = await UserData(data);
    localStorage.setItem("currentUser", JSON.stringify(userData));

    Navigate("/");
  };

  return (
    <WRAPPER>
      <img src={signupImage} alt="aa" />
      <DIV id="wrapperChild">
        <h1>Kindly fill this!</h1>
        <form onSubmit={handleSubmit} action="#">
          <div>
            <label>Participant name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
              className="name namefield"
              value={inputdata.name}
              required
            />
          </div>

          <div>
            <label>City name</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              onChange={handleChange}
              className="name cityfield"
              value={inputdata.city}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </DIV>
    </WRAPPER>
  );
};

export default Signup;

let DIV = styled.div`
  width: 50%;
  color: white;
  h1 {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 4rem;
  }
  form {
    margin: 5rem;
    margin-top: 0px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 5px;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .name {
    border: 0px;
    outline: 0;
    height: 2rem;
    border-radius: 9px;
    padding-left: 10px;
  }
  button {
    border: 0px;
    outline: 0;
    width: 40%;
    padding: 7px 30px;
    display: block;
    margin: auto;
    margin-top: 20px;
    border-radius: 9px;
    background-color: #938e8e;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
  }
  button:hover {
    background-color: #ffffff;
    color: black;
  }
`;

let WRAPPER = styled.div`
  background-color: #ffc102;
  height: 100vh;
  display: flex;
  img {
    width: 50%;
  }

  @media screen and (max-width: 1200px) {
    img {
      display: none;
    }
    #wrapperChild {
      margin: auto;
      width: 90%;
      color: #ffc102;
      background-color: white;
      border-radius: 8px;
      h1 {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      input {
        border: 2px solid grey;
      }
      button {
        width: 100%;
      }
      button:hover {
        background-color: #ffc102;
        color: white;
      }
    }
  }
`;
