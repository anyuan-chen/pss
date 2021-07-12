import React from "react";
import Link from "next/link";
/*
  This is a navbar component designed for use on all pages. 
*/
export default function Navbar() {
  return (
    <div>
      <nav className=" h-36 bg-green-darker">
        <ul className="flex justify-between">
          <li className="flex items-center">
            <img
              src="https://i.postimg.cc/85Cb11Nf/PSSO-Logo-White.png"
              className="object-contain h-36"
            ></img>
            <Link href="/">
              <a>
                <div>
                  <h1 className="text-white lg:text-2xl md:text-lg sm:text-sm  font-Poppins font-semibold">
                    Public Schools Speech Organization
                  </h1>
                  <p className="text-white">
                    Inspiring the next generation of great speakers.
                  </p>
                </div>
              </a>
            </Link>
          </li>
          <li className="hidden md:flex lg:flex  items-center ">
            <div className="flex space-between">
              <Link href="/">
                <a className="text-white  px-4">Home</a>
              </Link>
              <Link href="/meettheteam">
                <a className="text-white px-4">Meet The Team</a>
              </Link>
              <Link href="/eventsandprograms">
                <a className="text-white px-4">Events and Programs</a>
              </Link>
              <Link href="/contact">
                <a className="text-white px-4">Contact</a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
