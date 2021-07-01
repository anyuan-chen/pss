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
    <div className="flex flex-col items-center h-96 bg-green-dark justify-around">
      <h1 className="text-white font-bold text-3xl">{props.title}</h1>
      <p className="text-white px-32">{props.body}</p>
      <Link href="/aboutPublicSpeaking">
        <a className="text-white underline">Learn More</a>
      </Link>
    </div>
  );
}
