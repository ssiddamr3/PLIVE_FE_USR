// import React from 'react'
import React, { useState } from "react";
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import { useHistory, useLocation } from 'react-router-dom';

import Navbar from '../components/navbar'
import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/faq'
import './home.css'

const Home = (props) => {
  const history = useHistory();
  const [activeFeature, setActiveFeature] = useState('home-heading11');
  const handleClick = (feature) => {
    setActiveFeature(feature);
  };
  return (
    <div className="home-container1">
      <Helmet>
        <title>P L I V E</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name"></Navbar>
      <section className="home-section10">
        <div className="home-hero">
          <div className="home-content1">
            <main className="home-main1">
              <header className="home-header10">
                <h1 className="home-heading10">
                Discover Sports Events, Book Facilities, Join Communities, Shop Gear.
                </h1>
                <span className="home-caption1">
                P L I V E is the ultimate platform for all your sports needs. Join now to explore and engage in the world of sports.
                </span>
              </header>
              <div className="home-buttons1">
                <div className="home-get-started1 button">
                  <span className="home-text10" onClick={() => history.push('/login')}>Get started</span>
                </div>
                {/* <div className="home-get-started2 button">
                  <span className="home-text11">View features</span>
                </div> */}
              </div>
            </main>
            <div className="home-highlight">
              {/* <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image10 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image11 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image12 avatar"
                />
              </div> */}
              {/* <label className="home-caption2">
                Loved by 10,000+ people like you.
              </label> */}
            </div>
          </div>
          <div className="home-image13">
            <img
              alt="image"
              src="/SectionImages/Page 1.jpeg"
              className="home-image14"
            />
          </div>
          {/* <div className="home-image15">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="home-image16"
            />
          </div> */}
        </div>
      </section>
      <section className="home-section11">
        <h2 className="home-text12">
        Your All-in-One Sports Platform.
        </h2>
        <div className="home-features1">
        <header
          className={`feature ${activeFeature === 'home-heading11' ? 'feature-active' : ''} home-heading11`}
          onClick={() => handleClick('home-heading11')}
        >
          <h3 className="home-text13">Book</h3>
        </header>
        <header
          className={`feature ${activeFeature === 'home-heading12345' ? 'feature-active' : ''} home-heading12345`}
          onClick={() => handleClick('home-heading12345')}
        >
          <h3 className="home-text15">Join</h3>
        </header>
        <header
          className={`feature ${activeFeature === 'home-heading123456' ? 'feature-active' : ''} home-heading123456`}
          onClick={() => handleClick('home-heading123456')}
        >
          <h3 className="home-text15">Shop</h3>
        </header>
       
      </div>
        <div className="home-note1">
          <div className="home-content2">
            <main className="home-main2">
              <h2 className={`home-content2 feature home-feature3 feature-content ${activeFeature === 'home-heading11' ? 'show' : ''}`}/>
              {activeFeature === 'home-heading11' && (
            <div>
              <h2 className="home-heading11">
              Easily book sports facilities for various activities, ensuring you have a seamless experience every time.
              </h2>
              {/* <p className="home-paragraph1">
                Through PLIVE, we aim to foster a vibrant community of sports enthusiasts who value connection and play. Our desktop and mobile experiences are designed to keep you connected, no matter where you are, making it simple to dive into your next game or event.
              </p> */}
            </div>
          )}
          <h2 className={`home-content2 feature home-feature3 feature-content ${activeFeature === 'home-heading12345' ? 'show' : ''}`}/>
              {activeFeature === 'home-heading12345' && (
            <div>
              <h2 className="home-heading11">
              Connect with like-minded sports enthusiasts, join communities, and engage in various sports events and activities.
              </h2>
              {/* <p className="home-paragraph1">
                Through PLIVE, we aim to foster a vibrant community of sports enthusiasts who value connection and play. Our desktop and mobile experiences are designed to keep you connected, no matter where you are, making it simple to dive into your next game or event.
              </p> */}
            </div>
          )}
          <h2 className={`home-content2 feature home-feature3 feature-content ${activeFeature === 'home-heading123456' ? 'show' : ''}`}/>
              {activeFeature === 'home-heading123456' && (
            <div>
              <h2 className="home-heading11">
              Explore a wide range of sports accessories, buy what you need, or sell your items to fellow sports lovers on P L I V E's marketplace.
              </h2>
              {/* <p className="home-paragraph1">
                Through PLIVE, we aim to foster a vibrant community of sports enthusiasts who value connection and play. Our desktop and mobile experiences are designed to keep you connected, no matter where you are, making it simple to dive into your next game or event.
              </p> */}
            </div>
        
          )}
                <br></br>
                <br></br>
                {/* <span>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae.
                </span> */}
                <br></br>
              {/* </p> */}
            </main>
            {/* <div className="home-explore-more">
              <p className="home-text24">Explore more -&gt;</p>
            </div> */}
          </div>
          <div className="home-image17">
            <img
              alt="image"
              src="/SectionImages/image1.png"
              className="home-image18"
            />
          </div>
        </div>
      </section>
      
      <section className="home-section22">
        <header className="home-header20">
          <header className="home-left5">
            <span className="section-head">Reviews</span>
            <h2 className="home-heading24 section-heading">
              What users say about us.
            </h2>
          </header>
          <div className="home-right3">
            {/* <p className="home-paragraph6 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p> */}
          </div>
        </header>
        <main className="home-cards2">
          <div className="home-container2">
            <Review rootClassName="reviewroot-class-name" ></Review>
            <Review
            author="Pavan"
  quote="Your dedication to excellence shines through every aspect of this product. The attention to detail, commitment to quality, and the seamless execution reflect a profound understanding of user needs. It is clear that great care has been taken to ensure both functionality and satisfaction. This product not only meets but exceeds expectations, setting a new standard in its category. Well done!"
  rootClassName="reviewroot-class-name"
/>
          </div>
          <div className="home-container3">
          <Review
          author="Manish"
  quote="An outstanding product that perfectly balances innovation and practicality. It's evident that a lot of thought went into its design and functionality. Highly recommended!"
  rootClassName="reviewroot-class-name"
/>

<Review
author="Vinaya"
  quote="Exceptional quality and user experience. This product delivers on its promises and offers great value. It's a game-changer in its field!"
  rootClassName="reviewroot-class-name"
/>

          </div>
          <div className="home-container4">
          <Review
          author="Venkata Sai"
  quote="A truly impressive product with flawless performance and design. It’s clear that every detail has been carefully considered. Bravo!"
  rootClassName="reviewroot-class-name"
/>

<Review
author="Srinivas"
  quote="This product stands out for its excellent craftsmanship and attention to detail. It delivers superbly on its promises and sets a high bar for competitors."
  rootClassName="reviewroot-class-name"
/>

          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text49">View more</p>
        </div>
      </section>
      <section className="home-section24">
        <header className="home-header21">
          <span className="section-head">Articles about us.</span>
          <h2 className="home-heading25 section-heading">
            We’re the app on everyone’s lips.
          </h2>
        </header>
        <main className="home-cards3">
          <Article rootClassName="articleroot-class-name"></Article>
          <Article
            header="techeu"
            specialHeader="eu"
            rootClassName="articleroot-class-name"
          ></Article>
          <Article
            header="sifted/"
            rootClassName="articleroot-class-name"
          ></Article>
        </main>
      </section>
      {/* <section className="home-section26">
        <header className="home-header22">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading26 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="fa-qroot-class-name"></FAQ>
        </main>
      </section> */}
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
      <div>
        <div className="home-container6">
          <Script
            html={`<script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
