"use client";

import { useEffect, useState } from "react";
import BootSequence from "@/components/layout/BootSequence";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import Education from "@/components/sections/Education";
import Credentials from "@/components/sections/Credentials";
import BeyondCode from "@/components/sections/BeyondCode";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("booted");
    if (hasBooted) {
      setBooting(false);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("booted", "true");
    setBooting(false);
  };

  if (booting) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <main className="relative w-full flex flex-col items-center">
      <Hero />
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col gap-32 pb-32">
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <OpenSource />
        <Education />
        <Credentials />
        <BeyondCode />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
