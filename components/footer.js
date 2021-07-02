import React from "react";
import Link from "next/link";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className="bg-green-primary mt-40 w-full">
      <div className="flex flex-row justify-evenly">
        <div className="">
          <h1 className="text-white text-lg pb-4 py-8">Navigate</h1>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a className="text-white underline ">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/meettheteam">
                  <a className="text-white underline ">Meet The Team</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a className="text-white underline ">Events & Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white underline ">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="flex flex-row justify-evenly w-1/2 pt-10">
            <Socials
              imgUrl="https://i.imgur.com/xH5neEm.png"
              link="mailto:publicschoolspeech@gmail.com"
            ></Socials>

            <Socials
              imgUrl="https://i.imgur.com/hg1VjZ3.png"
              link="https://www.instagram.com/publicschoolspeech/"
            ></Socials>

            <Socials
              imgUrl="https://i.imgur.com/M0vYkKa.png"
              link="https://www.facebook.com/publicschoolspeech"
            ></Socials>
          </div>
        </div>
      </div>
    </div>
  );
}
