import React from "react";
import Navbar from "../components/navbar";
import Person from "../components/person";
import Footer from "../components/footer"
export default function MeetTheTeam() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <header className="flex justify-center text-6xl pt-8 pb-10">
          <h1>Meet Our Team</h1>
        </header>
        <main>
          <Person
            title="President"
            name="Christopher Lam"
            imgUrl="https://i.imgur.com/4o64tK7.png"
            desc="Hello, my name is Christopher Lam, and I’m thrilled to be a Co-President and a Co-Founder of Public Schools Speech Organization! As a high school student myself, I understand how competitive the academic landscape is becoming. At the same time, I also know that public speaking skills are the key to helping you stand out. Through PSSO, I hope to share my public speaking knowledge and experience with all of you to help you reach your full potential. Welcome to the PSSO community!"
          ></Person>
          <Person
            title="Director of Competitions"
            name="David Zhuang"
            imgUrl=""
            desc=""
          ></Person>
          <Person
            title="Director of External Affairs"
            name="Jia Jia He"
            imgUrl=""
            desc=""
          ></Person>
          <Person
            title="Web Developer"
            name="Andrew Chen"
            imgUrl=""
            desc=""
          ></Person>
          <Person
            title="External Affairs Coordinator"
            name="Ryan Yin"
            imgUrl=""
            desc=""
          ></Person>
          <Person
            title="Secretary"
            name="Hailey Lyn"
            imgUrl=""
            desc=""
          ></Person>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
