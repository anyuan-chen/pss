import React from "react";

export default function Socials(props) {
  return (
    <div>
      <a href={props.link}>
        <img className="grayscale w-10" src={props.imgUrl} ></img>
      </a>
    </div>
  );
}
