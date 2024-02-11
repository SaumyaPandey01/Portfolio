import "@/components/Contact.css";
import Image from "next/image";
import aboutFlower from "@/assets/about-flower.png";

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-section-child">
        <div className="contact-left">
          <h1>LETS WORK TOGETHER</h1>
          <p>
            Feel free to leave me a message via the form, or you
            <br />
            can get a hold of me at <span>adfisherdesign@gmail.com</span>
            <br />
            <br />
            Lets create something beautiful and impactful.
          </p>
        </div>
        <div className="contact-right">
          <form
            action="mailto:anupreet.2003@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" required />
            <label htmlFor="email">Email Address*</label>
            <input type="email" name="email" required />
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" />
            <label htmlFor="subject">What&apos;s this for regarding?*</label>
            <input type="text" name="subject" required />
            <label htmlFor="message">Message*</label>
            <textarea name="message" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <Image
        className="about-flowers"
        src={aboutFlower}
        alt="flowers in about section"
      />
    </section>
  );
};

export default Contact;
