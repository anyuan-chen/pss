import React from "react";
import Link from "next/link";
import Socials from "./socials";
import Subscribe from "./subscribe";

export default function Footer() {
  return (
    <div className="bg-green-900 w-full pb-10">
      <div className=" grid grid-cols-1 md:grid-cols-3">
        <div className="hidden md:flex flex-col items-center ">
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
        <div className="hidden md:flex flex-col items-center">
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
        <div className="inline px-8 md:px-0 ">
          <Subscribe alt="true"></Subscribe>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <p className="text-white">Created by Andrew Chen ©2021 </p>
      </div>
    </div>
  );
}
