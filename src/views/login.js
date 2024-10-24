import React, { useState } from "react";
import Script from 'dangerous-html/react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar';
import LNavbar from '../components/login-navbar';
import './home.css';

const Login = (props) => {
  const [activeFeature, setActiveFeature] = useState('home-heading11');
  const handleSignClick = (feature) => {
    setActiveFeature(feature);
    setLoginVisible(false);
  };
  const handleLoginClick = (feature) => {
    setActiveFeature(feature);
    setLoginVisible(true);
    setSignUpActive(false);
  };

  const handleSignUpClick = (feature) =>{
    setActiveFeature(feature);
    setSignUpActive(true);
    setLoginVisible(false);
    

  }
  const [isLoginVisible, setLoginVisible] = useState(true); 
  const [isSignUpActive, setSignUpActive] = useState(false);

  return (
    <div className="home-container1">
      <Helmet>
        <title>P L I V E</title>
      </Helmet>
      <LNavbar rootClassName="navbarroot-class-name"></LNavbar>
      <div className="login-signup-div">
      <section className="home-section101">
        <div className="home-heroo">
        <div className="home-features1">
        <header
          className={`feature ${activeFeature === 'home-heading11' ? 'feature-activee' : ''} home-heading11`}
          onClick={() => handleLoginClick('home-heading11')}
        >
          <h3 className="home-text131">Login</h3>
        </header>
        <div className="login-form">
       {isLoginVisible && (
          <div className="login-form-container">
            <div className="login-form">
              {/* <button className="google-signin-button">Sign in with Google</button> */}
              <br/>
              <br/>
              <h2 className="home-heading11">
              To continue, LOG IN.
              </h2>
              <br/>

              <div className="width-prop home-input-field">
                <input
                  type="email"
                  placeholder="Username"
                  className="home-textinput input"
                />
            
              </div>
              <br/>
              <br/>
              <div className="width-prop home-input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="home-textinput input"
                />
              
              </div>
              <br/>
              <div className="home-get-started11 button">
                  <span className="home-text101">Go</span>
                </div>
            </div>

          </div>
       )}
        {isSignUpActive && (
          <div className="login-form-container">
            <div className="login-form">
              {/* <button className="google-signin-button">Sign in with Google</button> */}
              <br/>
              <br/>
              <h2 className="home-heading11">
              To get started, SIGN UP.
              </h2>
              <br/>

              <div className="width-prop home-input-field">
                <input
                  type="email"
                  placeholder="Create Username"
                  className="home-textinput input"
                />
            
              </div>
              <br/>
              <br/>
              <div className="width-prop home-input-field">
                <input
                  type="password"
                  placeholder="Create Password"
                  className="home-textinput input"
                />
              
              </div>
              <br/>
              <br/>
              <div className="width-prop home-input-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="home-textinput input"
                />
              
              </div>
              <br/>
              <div className="home-get-started11 button">
                  <span className="home-text101">Go</span>
                </div>
            </div>

          </div>
       )}
       </div>
        <header
          className={`feature ${activeFeature === 'home-heading123456' ? 'feature-activee' : ''} home-heading123456`}
          onClick={() => handleSignUpClick('home-heading123456')}
        >
          <h3 className="home-text151">Sign up</h3>
        </header>
        <div className="login-form">
      
       </div>
       
      </div>
        </div>

      </section>
      </div>
    

      <footer className="home-footer">
        <div className="home-content7">
          <main className="home-main-content">
            <div className="home-content8">
              <header className="home-main5">
                <div className="home-header24">
                  <span className="home-text52">P L I V E</span>
                </div>
                <div className="home-socials">
                  <a href="https://example.com" target="_blank" rel="noreferrer noopener" className="home-link1">
                    <img alt="image" src="/Icons/linkedin-200h.png" className="social" />
                  </a>
                  <a href="https://example.com" target="_blank" rel="noreferrer noopener" className="home-link2">
                    <img alt="image" src="/Icons/instagram-200h.png" className="social" />
                  </a>
                  <a href="https://example.com" target="_blank" rel="noreferrer noopener" className="home-link3">
                    <img alt="image" src="/Icons/twitter-200h.png" className="social" />
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
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By signing up for P L I V E you will receive mails about exciting events, gear, and community updates.
            </h1>
          </main>
          <section className="home-copyright2">
            <span className="home-text71">© 2024 NYC. Credits will be given.</span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container6">
          <Script html={`<script>`}></Script>
        </div>
      </div>
    </div>
  );
}

export default Login;
