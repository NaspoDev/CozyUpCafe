import "../../css/home.css";
import heroBackground from "../../assets/cafe-hero.jpg";
import coffeeAndPastry from "../../assets/product_images/coffee_and_pastry.jpeg";
import interior from "../../assets/interior.jpg";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero">
        <div className="hero">
          <img
            src={heroBackground}
            alt="Coffee Shop Background Image"
            className="hero-bg-image"
          />
          <h1 className="company-name">CozyUpCafe</h1>
          <h2 className="tagline">Crafting Community, One Cup at a Time</h2>
          <a href="#about">
            <button className="about-us-button">About Us</button>
          </a>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* About Section */}
      <section id="about">
        <div className="about">
          <div className="text-container">
            <div className="border-div">
              <h2 className="about-us-title">
                Community Focused <br />
                Coffee Shop
              </h2>
              <p className="about-us-text">
                CozyUpCafe is a community-focused coffee shop that serves the
                best coffee in town. We are committed to providing a warm and
                inviting space for people to connect, relax, and enjoy a great
                cup of coffee.
              </p>

              <p className="mission-statement">
                &quot;Our mission at Cozy Cup Cafe is to create a welcoming
                environment where every cup feels like home. We strive to serve
                the highest quality coffee and food, sourced locally whenever
                possible, and to provide exceptional customer service to
                everyone who walks through our doors.&quot;
                <br />
                <br /> <i>- John Doe, Owner</i>
              </p>
            </div>
          </div>

          <img src={coffeeAndPastry} alt="Coffee and Pastry" />
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Image display Section */}
      <section id="image-display">
        <div className="image-display">
          <img src={interior} alt="Cafe Interior" className="cafe-interior" />
        </div>
      </section>
    </div>
  );
}

export default Home;
