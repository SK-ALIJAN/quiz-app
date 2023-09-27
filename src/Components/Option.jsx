import React, { useState } from "react";
import right from "../assets/right.png";
import wrong from "../assets/wrong.png";

const Option = ({ ele, handleClick }) => {
  let [mark, setMark] = useState(false);
  let [optionClick, setOptionClick] = useState(false);
  return (
    <div
      onClick={() => {
        let flag = handleClick(ele);
        setMark(flag);
        setOptionClick(!optionClick);
      }}
    >
      <p>{ele}</p>
      {!mark && optionClick ? (
        <img src={wrong} />
      ) : mark && optionClick ? (
        <img src={right} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Option;
