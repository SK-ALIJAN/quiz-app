import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import PrivateRoute from "./PrivateRoute";
import Signup from "../Components/Signup";
import Quize from "../Components/Quize";
import LeaderBoard from "../Components/LeaderBoard";
import UserInfo from "../Components/UserInfo";

const AllRouters = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/quiz"
        element={
          <PrivateRoute>
            <Quize />
          </PrivateRoute>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <PrivateRoute>
            <LeaderBoard />
          </PrivateRoute>
        }
      />
      <Route
        path="/Info"
        element={
          <PrivateRoute>
            <UserInfo />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRouters;
