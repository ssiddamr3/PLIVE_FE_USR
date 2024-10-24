import React from "react";
import { useNavigate } from 'react-router-dom';
import './Facilities.css';
import Navbar from '../components/navbar'
import { useHistory } from 'react-router-dom';
// import NavigationSideBar from "./NavigationComponent";

function FacilitiesPage() {
    // const navigate = useNavigate();
    const history = useHistory();

  

    const facilities = [
        { name: 'Pickle Ball', imgSrc: '/SectionImages/sp1.png', alt: 'Pickle Ball', path: '/facilities-list' },
        { name: 'Basket Ball', imgSrc: '/SectionImages/sp2.png', alt: 'Basket Ball', path: '/facilities-list' },
        { name: 'Volley Ball', imgSrc: '/SectionImages/sp3.png', alt: 'Volley Ball', path: '/facilities-list' },
        { name: 'Badminton', imgSrc: '/SectionImages/sp4.png', alt: 'Badminton', path: '/facilities-list' },
        { name: 'Tennis', imgSrc: '/SectionImages/sp5.png', alt: 'Tennis', path: '/facilities-list' },
        { name: 'Foot Ball', imgSrc: '/SectionImages/sp6.png', alt: 'Foot Ball', path: '/facilities-list' },
    ];

    return (
        <div className='home-container1'>
            <Navbar rootClassName="navbarroot-class-name"></Navbar>
            <div className="event-content">
                <h1 className="home-heading10">Sports Facility Booking</h1>
                <p className='home-caption1'>
                    Immerse yourself in the world of sports by joining communities, booking facilities, and engaging with fellow sports lovers on P L I V E.
                </p>
                <br/>
                <div className = 'cen-div'>
                <div className="event-grid">
                    {facilities.map((facility, index) => (
                        <div key={index} className="event-item" onClick={() => history.push('/facilities-list')}>
                            <img
                                className="event-column"
                                src={facility.imgSrc}
                                alt={facility.alt}
                            />
                            <p className="sp-name">{facility.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <br/>
<br/>
<br/>
<br/>
<br/>
<section className="home-section28">
        <main className="home-content6">
          <header className="home-header23">
            <h2 className="home-heading27 section-heading">
              Let's revolutize the way we play and connect!
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
            src="/SectionImages/Page 1 (1).jpeg"
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

export default FacilitiesPage;
