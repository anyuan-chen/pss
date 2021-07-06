import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Navbar></Navbar>
    </header>
    <main>{children}</main>
    <Footer></Footer>
  </div>
);
