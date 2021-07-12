import React from "react";
import Navbar from "../components/navbar";
import Subscribe from "../components/subscribe";
import Socials from "../components/socials";
import Footer from "../components/footer";
export default function Contact() {
  
  return (
    <div className="flex flex-col justify-center">
      <Navbar></Navbar>
      <div className="bg-green-primary p-24 grid grid-cols-2">
        <div className="bg-white flex flex-col py-20 px-40">
          <h1 className="text-green-darker font-bold text-lg md:text-xl lg:text-5xl py-5">
            Contact
          </h1>
          <p className="text-green-darker text-xs md:text-sm lg:text-md py-3">
            Have a question for us? Get in touch right away.
          </p>
          <p className="text-green-darker text-xs md:text-sm lg:text-md py-3">
            publicschoolspeech@gmail.com
          </p>
          <div className="flex flex-row gap-7 pb-10">
            <a href="https://facebook.com/publicschoolspeech">
              <img
                className="grayscale w-6"
                src="https://image.flaticon.com/icons/png/512/2111/2111392.png"
              ></img>
            </a>
            <a href="https://instagram.com/publicschoolspeech">
              <img
                className="grayscale w-6"
                src="https://image.flaticon.com/icons/png/512/1384/1384031.png"
              ></img>
            </a>
          </div>
          <form className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border border-b border-black border-t-0 border-l-0 border-r-0"></input>
              <input type="text" placeholder="Email" className="border border-b border-black border-t-0 border-l-0 border-r-0"></input>
            </div>
            <input type="text" placeholder="Subject" className="border border-b border-black border-t-0 border-l-0 border-r-0"></input>
            <textarea placeholder="Write your message here" className="border border-b border-black border-t-0 border-l-0 border-r-0"></textarea>
            <button
              type="submit"
              className="bg-green-darker px-10 py-3 text-white hover:opacity-50 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <img
          src="https://static.wixstatic.com/media/781083eaef2b4f8c9c8bcf3ede3718ff.jpg/v1/fill/w_732,h_860,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/781083eaef2b4f8c9c8bcf3ede3718ff.webp"
          alt="decor"
        ></img>
      </div>
      <Footer></Footer>
    </div>
  );
}
