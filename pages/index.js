import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <Navbar></Navbar>
      </Head>

      <main className="bg-two-times-crowd w-screen flex justify-center ">
        <h3 className="text-green-dark font-extrabold text-6xl h-96 w-4/5 pt-14">
          Inspiring the next generation of great speakers
        </h3>
        
      </main>

      <footer className="w-4/5">
        <h1> Footer</h1>
      </footer>
    </div>
  );
}
