import "@/components/Hero.css";
import Nav from "./Nav";
import Image from "next/image";
import flowerBushes from "@/assets/heroBushes.png";
import kaliPatti from "@/assets/kaliPatti.png";
import heroFlowers from "@/assets/heroFlowers2.png";
import textSvg from "@/assets/hero-text.svg";
import heroSvg from "@/assets/svg-hero.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <Nav />
      <h1 className="hero-name">SAUMYA PANDEY</h1>

      <Image className="heroBushes" src={flowerBushes} alt="heroflowers" />
      <Image className="kaliPatti" src={kaliPatti} alt="heroBush" />
      <Image className="heroFlowers" src={heroFlowers} alt="heroBush" />
    </div>
  );
};

export default Hero;
