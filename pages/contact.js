import React from "react";
import Navbar from "../components/navbar";
import Subscribe from "../components/subscribe";
import Socials from "../components/socials";
import Footer from "../components/footer"
export default function Contact() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar></Navbar>
      <div className="flex justify-center flex-col items-center">
        <h1 className="pt-5 text-6xl text-center">Get In Touch</h1>

        <Subscribe></Subscribe>
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
      <Footer></Footer>
    </div>
  );
}
