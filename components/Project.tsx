import "@/components/Project.css";
import Image from "next/image";
import project1 from "@/assets/project1.jpg";
import hrSvg from "@/assets/hr-svg.svg";

const Project = () => {
  return (
    <div id="project-section">
      <h1 className="project-heading">PROJECTS</h1>
      <hr className="art-hr" />
      <div className="project-grid">
        <div className="project-grid-divs">
          <Image
            className="project-grid-images"
            src={project1}
            alt="first-projet"
          />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="project-grid-divs">
          <Image
            className="project-grid-images"
            src={project1}
            alt="first-projet"
          />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="project-grid-divs">
          <Image
            className="project-grid-images"
            src={project1}
            alt="first-projet"
          />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="project-grid-divs">
          <Image
            className="project-grid-images"
            src={project1}
            alt="first-projet"
          />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
      </div>
      <Image src={hrSvg} alt="horizontal line" className="project-hr" />
    </div>
  );
};

export default Project;
