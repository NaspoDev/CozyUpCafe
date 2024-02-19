import instagramIcon from "../../assets/instagram_icon.png";
import facebookIcon from "../../assets/facebook_icon.webp";
import assortedMenuDisplay from "../../assets/assorted_menu_display.jpeg";
import "../../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      {/* background image */}
      <img
        src={assortedMenuDisplay}
        alt="Assorted menu display"
        className="background-image"
      />

      {/* page content */}
      <div className="heading-container">
        <h1>Contact Us</h1>
        <p>Get in touch or come on by! We&apos;d love to have you.</p>
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
            <div className="phone-number-container info-piece-container">
              <h3>Phone Number</h3>
              <p>555-123-4567</p>
            </div>
            <div className="email-container info-piece-container">
              <h3>Email</h3>
              <a href="mailto:info@cozycupcafe.com" className="email">
                info@cozycupcafe.com
              </a>
            </div>
            <div className="address-container info-piece-container">
              <h3>Address</h3>
              <p>We&apos;re located at 123 Main Street, Willow Creek, CA</p>
            </div>
          </div>

          <div className="socials-container">
            <h3>Follow our socials!</h3>
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
