import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-green-primary mt-40">
      <div>
        <h1>Navigate</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/meettheteam">
                <a>Meet The Team</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a>Events & Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
