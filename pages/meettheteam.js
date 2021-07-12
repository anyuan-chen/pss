import React from "react";
import Navbar from "../components/navbar";
import Person from "../components/person";
import Footer from "../components/footer";
export default function MeetTheTeam() {
  return (
    <div>
      <div>
        <div className="h-screen">
          <Navbar></Navbar>
          <div className="h-4/5 grid grid-rows-2">
            <div className="bg-green-darker text-white flex justify-center">
              <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-lg md:text-4xl lg:text-6xl font-bold py-4">
                  Who We Are
                </h1>
                <p className="text-s md:base">
                  Public Schools Speech Organization (PSSO) is a community
                  organization led by students with a passion for public
                  speaking. PSSO was created on the foundation that public
                  speaking should be accessible to everyone. Currently, the
                  public speaking community is dominated by private school
                  students who are able to gain competitive advantages through
                  exclusive access to resources and connections. PSSO works to
                  bridge the gap between public school students and the world of
                  public speaking. We share our knowledge and experience with
                  students across the Greater Toronto Area to help students find
                  their voice.
                </p>
              </div>
            </div>
            <div className="bg-green-dark text-white flex justify-center">
              <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-lg md:text-4xl lg:text-6xl font-bold py-4">
                  Mission Statement
                </h1>
                <p className="text-s md:base">
                  Public Schools Speech Organization (PSSO) aims to connect and
                  grow the public speaking community among public school
                  students in the Greater Toronto Area. We focus on encouraging
                  students to explore their potential, improve their skills, and
                  pursue opportunities in public speaking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <header className="flex justify-center text-6xl pt-8 pb-10">
          Meet Our Team
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
