import { createContext, useState } from "react";
import axios from "axios";

let Context = createContext();

// all the users who participant in quize
let UsersURL = `https://651296deb8c6ce52b395d9db.mockapi.io/users`;
let quizData=[];
let ContextProvider = ({ children }) => {
  let [signup, setSignUp] = useState(localStorage.getItem("signup") || false);

  let config = {
    quiz: async (categoryResponse) => {
      let url = `https://opentdb.com/api.php?amount=10&category=${categoryResponse}&difficulty=easy&type=multiple`;
      try {
        let response = await axios(url);
        localStorage.setItem("quiz", JSON.stringify(response.data.results));
       quizData=response.data.results;
      } catch (error) {
        console.log(error);
      }
    },

    data: quizData,
    UserData: async (newUserData) => {
      try {
        let response = await fetch(`${UsersURL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        });

        let data = response.json();
        setSignUp(true);
        localStorage.setItem("signup", true);
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },

    userSignUp: signup,

    userScoreUpdate: async (newData, id) => {
      try {
        let data = await axios.patch(`${UsersURL}/${id}`, newData);
      } catch (error) {
        console.log(error);
      }
    },

    GetAllUserData: async () => {
      try {
        let response = await fetch(UsersURL);
        let data = response.json();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  };

  return <Context.Provider value={config}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
