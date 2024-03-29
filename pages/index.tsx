import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import NavBar from "../components/Navbar";

import React, { useState } from "react";

export default function Home() {
  // dark mode
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Seano Chang</title>
        <meta name="description" content="Sean Chang Personal Website" />
        <meta charSet="utf-8" />
      </Head>
      <div className="w-screen min-h-screen text-[#27424e] dark:text-[#dbebf0] shadow-cyan-800/20 dark:shadow-cyan-50/20">
        <NavBar dark={darkMode} setDark={handleDarkMode} />
        <main id="home" className="w-full bg-cyan-50 dark:bg-[#121e2a]">
          <Header />
          <Body />
        </main>
        <Footer />
      </div>
    </div>
  );
}
