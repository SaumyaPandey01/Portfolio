import About from "@/components/About";
import Art from "@/components/Art";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <Art />
      <About />
      <Project />
      <Contact />
      {/* <div style={{ backgroundColor: "#FFF5DF", height: "100vh" }}>Heeelo</div> */}
    </>
  );
}
