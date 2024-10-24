import React, { useState } from "react";
import FacilityRegistrationForm from "/Users/sreekarreddy/Downloads/planical modern template-react/src/views/FacilityRegistration.js";
import './FacilitiesList.css';
import Navbar from '../components/navbar'
import USAMap from "../components/USAMap";

function SportFacilitiesListPage() {
    const [showForm, setShowForm] = useState(false);
    const [stateClicked, setStateClicked] = useState(false); // Add stateClicked state

    const handleImageClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className='home-container1'>
            <Navbar rootClassName="navbarroot-class-name"></Navbar>

            <div className="event-content">
                <div className="Appp">
                    <USAMap stateClicked={stateClicked} setStateClicked={setStateClicked} />
                </div>
                
                {/* Conditionally render the list of facilities based on stateClicked */}
                {stateClicked && (
                    <>
                        <h1 className="home-heading10">List of Facilities</h1>
                        <br />
                        <div className="facility-grid">
                            <div className="facility-item">
                                <img 
                                    onClick={handleImageClick} 
                                    src="/SectionImages/sf1.png" 
                                    alt="Nassau Indoor Facility"
                                    className="facility-image"
                                />
                                <p className="facility-message">Nassau Indoor Facility
                                    <br />
                                    Sport Facilities : Badminton
                                </p>
                                <button onClick={handleImageClick} className='update-submit'>Book Now</button>
                            </div>
                            <div className="facility-item">
                                <img 
                                    onClick={handleImageClick} 
                                    src="/SectionImages/sf2.png" 
                                    alt="JFK Tennis Academy"
                                    className="facility-image"
                                />
                                <p className="facility-message">JFK Tennis Academy
                                    <br />
                                    Sport Facilities : Pickleball
                                </p>
                                <button onClick={handleImageClick} className='update-submit'>Book Now</button>
                            </div>
                            <div className="facility-item">
                                <img 
                                    onClick={handleImageClick} 
                                    src="/SectionImages/sf3.png" 
                                    alt="Little Club Indoor"
                                    className="facility-image"
                                />
                                <p className="facility-message">Little Club Indoor
                                    <br />
                                    Sport Facilities : Baseball
                                </p>
                                <button onClick={handleImageClick} className='update-submit'>Book Now</button>
                            </div>
                        </div>
                        {showForm && <FacilityRegistrationForm onClose={handleCloseForm} />}
                    </>
                )}
            </div>
            {/* The rest of your footer and other content */}
            <footer className="home-footer">
        <div className="home-content7">
          <main className="home-main-content">
            <div className="home-content8">
              <header className="home-main5">
                <div className="home-header24">
                  <span className="home-text52">
                    P L I V E
                  </span>
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
                    <span className="footer-link">
                      Static Website Generator
                    </span>
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
              <span className="home-text66">
                © 2024 NYC. Credits will be given.
              </span>
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
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By signing up for P L I V E you will receive a mails about the exciting events, gears and community updates.
            </h1>
          </main>
          <section className="home-copyright2">
            <span className="home-text71">
              © 2024 NYC. Credits will be given.
            </span>
          </section>
        </div>
      </footer>

        </div>
    );
}

export default SportFacilitiesListPage;
