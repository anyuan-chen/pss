import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <nav className="bg-green-dark h-36">
          <ul className="flex justify-between">
            <li className="flex items-center">
              <img
                src="https://i.postimg.cc/85Cb11Nf/PSSO-Logo-White.png"
                className="object-contain h-36"
              ></img>
              <div>
                <h1 className="text-white text-2xl font-Poppins font-semibold">
                  Public Schools Speech Organization
                </h1>
                <h3 className="text-white">
                  Inspiring the next generation of great speakers
                </h3>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex space-between">
                <Link href="/">
                  <a className="text-white  px-4">Home</a>
                </Link>
                <Link href="/">
                  <a className="text-white px-4">About Us</a>
                </Link>
                <Link href="/">
                  <a className="text-white px-4">Events and Programs</a>
                </Link>
                <Link href="/">
                  <a className="text-white px-4">Contact</a>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
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
