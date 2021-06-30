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
        <h1> hello from the main</h1>
      </main>

      <footer>
        <h1> hello from the footer</h1>
      </footer>
    </div>
  );
}
