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

      <div className="rounded-text rotating">
        <svg viewBox="0 0 200 200">
          <path
            id="textPath"
            d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
            transform="translate(100,100)"
            fill="none"
            stroke-width="0"
          ></path>
          <g font-size="17.1px">
            <text text-anchor="start">
              <textPath
                className="coloring"
                xlinkHref="#textPath"
                startOffset="0%"
              >
                -SAUMYA PANDEY -- CONTENT WRITER- saumyapandey@gmail.com
              </textPath>
            </text>
          </g>
        </svg>
      </div>
      <Image src={hrSvg} alt="horizontal line" className="about-hr" />

      {/* <div className="rotating-text-container">
        <p className="rotating-text">CAT WOMAN • PLANT LADY • MARVEL GEEK</p>
      </div> */}
    </section>
  );
};

export default About;
