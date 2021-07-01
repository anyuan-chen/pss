import React from "react";
/*
    This is a person component designed for usage on the "meet our team section of the page"
    Example can be found in /pages/meetttheteam.js

    Props:
        name - name of person
        imgUrl - imgur url of photo
        desc - description of person
*/
export default function person(props) {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center flex-col">
        <h1 className="pt-10 pb-5 text-3xl">{props.name}</h1>
        <h2 className="pb-8 text-xl">{props.title}</h2>
        <p className="px-24 text-lg">{props.desc}</p>
      </div>
      <img src={props.imgUrl}></img>
    </div>
  );
}
