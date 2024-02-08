import "@/components/Hero.css";
import Nav from "./Nav";
import Image from "next/image";
import flowerBushes from '@/assets/heroBushes.png'
import kaliPatti from '@/assets/kaliPatti.png'
import heroFlowers from '@/assets/heroFlowers.png'


const Hero = () => {
  return (
    <div className="hero-section">
      <Nav />

      {/* <div className="heroFlowers">
        <h1>SAUMYA PANDEY</h1>
      </div> */}
      <Image className='heroBushes' src={flowerBushes}  alt='heroflowers'/>
      <Image className='kaliPatti' src={kaliPatti}  alt='heroBush'/>
      <Image className='heroFlowers' src={heroFlowers}  alt='heroBush'/>
    </div>
  );
};

export default Hero;
