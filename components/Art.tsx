import "@/components/Art.css";
import Image from "next/image";
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";

const Art = () => {
  return (
    <section id="art-section">
      <h1 className="art-heading">ILLUSTRATIONS</h1>
      <hr className="art-hr" />
      <div className="art-section-images">
        <div className="slide-image">
          <Image src={image1} alt="image1" className="image1" />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="slide-image">
          <Image src={image1} alt="image1" className="image1" />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="slide-image">
          <Image src={image1} alt="image1" className="image1" />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="slide-image">
          <Image src={image1} alt="image1" className="image1" />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="slide-image">
          <Image src={image1} alt="image1" className="image1" />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="slide-image">
          <Image src={image1} alt="image1" className="image1" />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        <div className="slide-image">
          <Image src={image1} alt="image1" className="image1" />
          <div>
            <h1>PINE TREES</h1>
            <p>Learn More</p>
          </div>
        </div>
        {/* <div className="slide-image">
          <Image
            className="slide-image-individual"
            src={image2}
            alt="heroflowers"
          />
        </div>
        <div className="slide-image">
          <Image
            className="slide-image-individual"
            src={image3}
            alt="heroflowers"
          />
        </div>
        <div className="slide-image">
          <Image
            className="slide-image-individual"
            src={image4}
            alt="heroflowers"
          />
        </div>
        <div className="slide-image">
          <Image
            className="slide-image-individual"
            src={image1}
            alt="heroflowers"
          />
        </div>
        <div className="slide-image">
          <Image
            className="slide-image-individual"
            src={image2}
            alt="heroflowers"
          />
        </div>
        <div className="slide-image">
          <Image
            className="slide-image-individual"
            src={image3}
            alt="heroflowers"
          />
        </div>
        <div className="slide-image">
          <Image
            className="slide-image-individual"
            src={image4}
            alt="heroflowers"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Art;
