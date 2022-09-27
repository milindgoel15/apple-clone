import React from "react";

let ButtonLayout = (props) => {
  return (
    <>
      <a
        className={`${props.buttonStyles} px-4 cursor-pointer text-blue-500`}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={`hover:underline underline-offset-4`}
        >
          {props.text}
        </span>
      </a>
    </>
  );
};

export default ButtonLayout;
