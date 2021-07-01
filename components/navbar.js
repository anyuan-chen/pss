import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <nav className="bg-green-dark h-36">
        <ul className="flex justify-between">
          <li className="flex items-center">
            <img
              src="https://i.postimg.cc/85Cb11Nf/PSSO-Logo-White.png"
              className="object-contain h-36"
            ></img>
            <div>
              <h1 className="text-white text-2xl font-Poppins font-semibold">
                Public Schools Speech Organization
              </h1>
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex space-between">
              <Link href="/">
                <a className="text-white  px-4">Home</a>
              </Link>
              <Link href="/">
                <a className="text-white px-4">About Us</a>
              </Link>
              <Link href="/">
                <a className="text-white px-4">Events and Programs</a>
              </Link>
              <Link href="/">
                <a className="text-white px-4">Contact</a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
