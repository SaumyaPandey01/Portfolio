import "@/components/Socials.css";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <section id="socials-section">
      <div className="socials-wrapper">
        <div className="icon-wrapper">
          <FiInstagram className="icon" />
          <FaLinkedinIn className="icon" />
          <FaXTwitter className="icon" />
        </div>
        <div className="top-navigator">
          <a href="#">TO TOP</a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
