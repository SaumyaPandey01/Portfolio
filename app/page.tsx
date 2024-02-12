"use client";

import About from "@/components/About";
import Art from "@/components/Art";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Socials from "@/components/Socials";
import { useEffect, useState } from "react";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener(
      "mousemove",
      updateCursorPosition as EventListener
    );

    return () => {
      document.removeEventListener(
        "mousemove",
        updateCursorPosition as EventListener
      );
    };
  }, []);

  return (
    <>
      <div className="cursor-wrapper">
        <div
          className="cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        ></div>
      </div>
      <Hero />
      <Art />
      <About />
      <Project />
      <Contact />
      <Socials />

      {/* transform: translate3d(49.992vw, -10.642vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    background-color: rgb(138, 115, 62);
    border-color: rgb(138, 115, 62);
    will-change: transform; */}
      {/* <div style={{ backgroundColor: "#FFF5DF", height: "100vh" }}>Heeelo</div> */}
    </>
  );
}
