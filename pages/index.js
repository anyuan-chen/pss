import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Box from "../components/box";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <main>
        <Navbar></Navbar>
        <div className="w-screen flex flex-col pl-20 pb-48 bg-microphonecrowd">
          <h3 className="text-white font-extrabold text-6xl w-4/5 pt-36 pb-48">
            Inspiring the next generation of great speakers
          </h3>
          <Link href="/contact">
            <a>
              <button className="bg-gray-800 bg-opacity-50 hover:bg-black text-white font-semibold max-w-xs hover:text-white py-6 px-20 hover:border-transparent rounded">
                Join us today
              </button>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <Box
            title="What's public speaking?"
            body="The art of verbal communication, encompassing everything from formal parliamentary speeches to casual discussions among friends.  
            "
          ></Box>
          <Box
            title="What is public speaking about?"
            body="Public speaking is all about developing a variety of techniques involving content, voice expression, and body language to deliver an impactful message to an audience."
          ></Box>
          <Box title="Who are we?" body="We're the best."></Box>
        </div>
      </main>

      <footer className="w-full">
        <Footer></Footer>
      </footer>
    </div>
  );
}
