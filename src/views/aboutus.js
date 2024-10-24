import React, { useState } from "react";
import Navbar from "../components/navbar";
import './aboutus.css';

const AboutPage = () => {
  const [activeFeature, setActiveFeature] = useState('home-heading11');

  const handleClick = (feature) => {
    setActiveFeature(feature);
  };

  return (
    <div className='home-container1'>
      <Navbar rootClassName="navbarroot-class-name" />
      <header className="home-header10">
        <h1 className="home-heading10">About Us</h1>
        <span className="home-caption1">P L I V E is the ultimate platform for all your sports needs.</span>
        <span className="home-caption1">Join now to explore and engage in the world of sports.</span>
      </header>
      <h3 className="home-caption1">
        We're passionate about creating unique sports experiences and making them easy for everyone to enjoy.
      </h3>
      <h4 className="plive-moto home-caption1">
        "PLAY TOGETHER & HIVE FOREVER" ~ P L I V E
      </h4>
      <br />
      <div className="home-features1">
        <header
          className={`feature ${activeFeature === 'home-heading11' ? 'feature-active' : ''} home-heading11`}
          onClick={() => handleClick('home-heading11')}
        >
          <h3 className="home-text13">Our Beliefs</h3>
        </header>
        <header
          className={`feature ${activeFeature === 'home-heading12345' ? 'feature-active' : ''} home-heading12345`}
          onClick={() => handleClick('home-heading12345')}
        >
          <h3 className="home-text15">Our Team</h3>
        </header>
        {/* <div className={`feature-content ${activeFeature === 'home-heading11' ? 'show' : ''}`}>
          {activeFeature === 'home-heading11' && (
            <div>
              <h2 className="home-heading11">
                Our platform is built on the principles of simplicity, accessibility, and community. We believe that participating in sports should be easy and enjoyable, which is why we’ve integrated various features to help you get involved and stay engaged in the activities you love.
              </h2>
              <p className="home-paragraph1">
                Through PLIVE, we aim to foster a vibrant community of sports enthusiasts who value connection and play. Our desktop and mobile experiences are designed to keep you connected, no matter where you are, making it simple to dive into your next game or event.
              </p>
            </div>
          )}
        </div> */}
        {/* <div className={`feature-content ${activeFeature === 'home-heading12345' ? 'show' : ''}`}>
          {activeFeature === 'home-heading12345' && (
            <p className="home-paragraph2">
              We’re three friends who built PLIVE to make finding and playing sports effortless. Discover events, book courts, and connect with others—all in one app. PLIVE is your go-to for staying active and enjoying sports without the hassle.
            </p>
          )}
        </div> */}
      </div>
      <div className={`home-content2 feature home-feature3 feature-content ${activeFeature === 'home-heading11' ? 'show' : ''}`}>
          {activeFeature === 'home-heading11' && (
            <div>
              <h2 className="home-heading11">
                Our platform is built on the principles of simplicity, accessibility, and community. We believe that participating in sports should be easy and enjoyable, which is why we’ve integrated various features to help you get involved and stay engaged in the activities you love.
              </h2>
              {/* <p className="home-paragraph1">
                Through PLIVE, we aim to foster a vibrant community of sports enthusiasts who value connection and play. Our desktop and mobile experiences are designed to keep you connected, no matter where you are, making it simple to dive into your next game or event.
              </p> */}
            </div>
          )}
        </div>
        <div className={`home-content2 feature home-feature3 feature-content ${activeFeature === 'home-heading12345' ? 'show' : ''}`}>
          {activeFeature === 'home-heading12345' && (
            <h3 className="home-heading11">
              We’re two friends, built P L I V E to make finding and playing sports effortless. Discover events, book courts, and connect with others—all in one app. PLIVE is your go-to for staying active and enjoying sports without the hassle.
            </h3>
          )}
        </div>
      {/* <div className="home-note1">
        <div className="home-headin12345">
          <main className="home-main2">
            <h2 className="home-heading11">
              Our platform is built on the principles of simplicity, accessibility, and community. We believe that participating in sports should be easy and enjoyable, which is why we’ve integrated various features to help you get involved and stay engaged in the activities you love.
            </h2>
            <p className="home-paragraph1">
              Through PLIVE, we aim to foster a vibrant community of sports enthusiasts who value connection and play. Our desktop and mobile experiences are designed to keep you connected, no matter where you are, making it simple to dive into your next game or event.
            </p>
          </main>
          <div className="home-explore-more">
            <p className="home-text24">Explore more -&gt;</p>
          </div>
        </div>
        <div className="home-image17">
          <img
            alt="image"
            src="/SectionImages/group%201490-1200w.png"
            className="home-image18"
          />
        </div>
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="home-section28">
        <main className="home-content6">
          <header className="home-header23">
            <h2 className="home-heading27 section-heading">
              Let's revolutionize the way we play and connect!
            </h2>
            <div className="home-buttons3">
              <div className="home-ios button">
                <img
                  alt="image"
                  src="/Icons/apple-200w.png"
                  className="home-icon1"
                />
                <span className="home-text50">Download for iOS</span>
              </div>
              <div className="home-android button">
                <img
                  alt="image"
                  src="/Icons/android-200h.png"
                  className="home-icon2"
                />
                <span className="home-text51">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/group%201505-1200w.png"
            className="home-image25"
          />
        </main>
      </section>

      <footer className="home-footer">
        <div className="home-content7">
          <main className="home-main-content">
            <div className="home-content8">
              <header className="home-main5">
                <div className="home-header24">
                  <span className="home-text52">P L I V E</span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link3"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category1">
                  <div className="home-header25">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">Static Website Generator</span>
                  </div>
                </div>
                <div className="home-category2">
                  <div className="home-header26">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links2">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright1">
              <span className="home-text66">© 2024 NYC. Credits will be given.</span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main6">
              <h1 className="home-heading28">Sign up for P L I V E</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy4 button">
                  <span className="home-text67">-&gt;</span>
                  <span className="home-text68">
                    <span>Subscribe now</span>
                    <br />
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By signing up for P L I V E you will receive emails about exciting events, gear, and community updates.
            </h1>
          </main>
          <section className="home-copyright2">
            <span className="home-text71">© 2024 NYC. Credits will be given.</span>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
