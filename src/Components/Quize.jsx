import React, { useContext, useState } from "react";
import { Context } from "../ContextApi";
import { styled } from "styled-components";

const Quize = () => {
  let { data } = useContext(Context);
  console.log(data);
  return <>{data.length === 0 ? <LOADER className="loader"></LOADER> : ""}</>;
};

export default Quize;


let LOADER=styled.div`
  .loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  border-radius: 50%;
}

.loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  width: 36px;
  height: 36px;
}

.loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  width: 36px;
  height: 36px;
  animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

`