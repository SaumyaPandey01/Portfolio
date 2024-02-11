import "@/components/About.css";
import Image from "next/image";
import hrSvg from "@/assets/hr-svg.svg";
import aboutImg from "@/assets/saumya.jpeg";

const About = () => {
  return (
    <section className="about">
      <Image src={hrSvg} alt="horizontal line" className="about-hr" />
      <div className="about-content">
        <div className="about-content-text">
          <h1>HELLO!</h1>
          <p>
            {" "}
            I AM SAUMYA PANDEY, A FREELANCE GRAPHIC DESIGNER & ILLUSTRATOR BASED
            IN WINNIPEG, CANADA. I’VE HAD OVER SEVEN YEARS OF AGENCY EXPERIENCE,
            AND HAVE PLACED MY MAIN FOCUS ON ILLUSTRATION WORK, BRANDING AND
            IDENTITY PROJECTS.
          </p>
        </div>
        <div className="about-content-image">
          <Image className="about-image" src={aboutImg} alt="owner" />
        </div>
      </div>
      <Image src={hrSvg} alt="horizontal line" className="about-hr" />
      {/* <div className="rotating-text-container">
        <p className="rotating-text">CAT WOMAN • PLANT LADY • MARVEL GEEK</p>
      </div> */}
    </section>
  );
};

export default About;
