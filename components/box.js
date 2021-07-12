import React from "react";
import Link from "next/link";
/*
    This is a box component designed for use on the front page. You can find it used in the
    main section of index.js;

    Props:
        title - the title displayed on the box
        body- the body text of the box
*/
export default function Box(props) {
  return (
    <div className="hidden md:flex flex-col items-center h-96 bg-green-darker justify-around">
      <h1 className="text-white font-bold lg:text-2xl md:text-lg text-sm">{props.title}</h1>
      <p className="text-white px-16 lg:text-base md:text-sm  ">{props.body}</p>
      <Link href="/aboutPublicSpeaking">
        <a className="text-white underline">Learn More</a>
      </Link>
    </div>
  );
}
