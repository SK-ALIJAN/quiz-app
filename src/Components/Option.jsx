import React, { useState } from "react";
import right from "../assets/right.png";
import wrong from "../assets/wrong.png";

const Option = ({ ele, handleClick, mark }) => {
  let [optionClick, setOptionClick] = useState(false);
  return (
    <div
      onClick={() => {
        let flag = handleClick(ele);

        setOptionClick(!optionClick);
      }}
    >
      <p>{ele}</p>
      {mark ? <img src={right} /> : ""}
    </div>
  );
};

export default Option;
