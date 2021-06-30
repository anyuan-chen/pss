import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <Navbar></Navbar>
      </Head>

      <main>
        <h1> Main</h1>
      </main>

      <footer>
        <h1> Footer</h1>
      </footer>
    </div>
  );
}
