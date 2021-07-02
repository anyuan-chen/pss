import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Box from "../components/box";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <main>
        <Navbar></Navbar>
        <div className="bg-two-times-crowd w-screen flex flex-col pl-20 pb-48">
          <h3 className="text-black font-extrabold text-6xl w-4/5 pt-24 pb-48">
            Inspiring the next generation of great speakers
          </h3>
          <button class="bg-gray-800 bg-opacity-50 hover:bg-black text-white font-semibold max-w-xs hover:text-white py-6 hover:border-transparent rounded">
            Join us today
          </button>
        </div>
        <div className="grid grid-cols-3">
          <Box
            title="What's public speaking?"
            body="At et kasd est at aliquyam dolores erat. Takimata diam et ipsum takimata. Tempor sadipscing lorem takimata sed kasd elitr."
          ></Box>
          <Box
            title="Why public speaking?"
            body="Ipsum accusam sea et sea dolores duo duo nonumy et tempor. Est sit clita eirmod est. Et invidunt consetetur consetetur."
          ></Box>
          <Box
            title="Who are we?"
            body="Eirmod lorem sit gubergren stet vero ut invidunt voluptua eos. Lorem diam sit sit duo. Tempor consetetur lorem dolor gubergren."
          ></Box>
        </div>
      </main>

      <footer className="w-full">
        <Footer></Footer>
      </footer>
    </div>
  );
}
