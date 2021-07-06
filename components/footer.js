import React from "react";
import Link from "next/link";
import Socials from "./socials";
import Subscribe from "./subscribe"

export default function Footer() {
  return (
    <div className="bg-green-primary mt-40 w-full pb-10">
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
        <div className="">
          <h1 className="text-white text-lg pb-4 py-8">Social Links</h1>
          <nav>
            <ul>
              <li>
                <Link href="mailto:publicschoolspeech@gmail.com">
                  <a className="text-white underline ">Email</a>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/publicschoolspeech">
                  <a className="text-white underline ">Instagram</a>
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com/publicschoolspeech">
                  <a className="text-white underline ">Facebook</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white underline ">Newsletter</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Subscribe alt="true"></Subscribe>
      </div>
      <div className="flex justify-center pt-5">
        <p className="text-white">Created by Andrew Chen ©2021 </p>
      </div>
    </div>
  );
}
