import instagramIcon from "../../assets/instagram_icon.png";
import facebookIcon from "../../assets/facebook_icon.webp";
import "../../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="heading-container">
        <h1>Contact Us</h1>
      </div>
      <div className="content-area">
        <div className="embedded-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11510.070385378162!2d-79.4709185!3d43.845099499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2957d03f48a9%3A0xebb173891e4c5cab!2sStarbucks!5e0!3m2!1sen!2sca!4v1708229890129!5m2!1sen!2sca"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-info-container">
          <div className="basic-info-container">
            <p className="phone-number">Phone: 555-123-4567</p>
            <a href="info@cozycupcafe.com" className="email">
              info@cozycupcafe.com
            </a>
            <br />
            <p className="address">
              We&apos;re located at 123 Main Street, Willow Creek, CA
            </p>
          </div>

          <div className="socials-container">
            <p>Follow our socials!</p>
            <div className="socials-icons-container">
              <a href="https://www.instagram.com">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
