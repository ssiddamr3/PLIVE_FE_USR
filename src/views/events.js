import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Ensure you import the calendar styles
import Navbar from '../components/navbar'; // Adjust the import path if necessary
import './event.css';
import Article from '../components/article';
import MapComponent from './MapComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import ToggleSwitch from './ToggleSwitch';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LottieAnimation from './LottieAnimation';


const Event = (props) => {
  const formRef = useRef(null);
  const closeRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const address = '1600 Amphitheatre Parkway, Mountain View, CA';
  const [isToggled, setIsToggled] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  const lottiefileSuc = "/Users/sreekarreddy/Downloads/planical modern template-react/src/views/success.lottie";
  // List of images
  const imageMap = {
    1: '/SectionImages/e1.png',
    2: '/SectionImages/e2.png',
    3: '/SectionImages/e3.png',
    4: '/SectionImages/e4.png',
    5: '/SectionImages/e5.png'
  };

  // Function to handle date change and update image
  const handleDateChange = (newDate) => {
    setDate(newDate);
    const randomImageIndex = Math.floor(Math.random() * 5) + 1;
    setSelectedImage(randomImageIndex);
    //setShowForm(true); // Show the form when a date is clicked
  };

  const registrationHandler = async () => {
    if (!showForm) {
      setShowForm(true);
      
      // Wait for the state to update
      await new Promise(resolve => setTimeout(resolve, 0));
  
      // Scroll into view
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  

  const closeHandler = () =>{
    setShowForm(false);
    setTimeout(() => {
      if (closeRef.current) {
        closeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }

  // Generate random location
  const getRandomLocation = () => {
    const locations = ['Park', 'Stadium', 'Gym', 'Community Center', 'School Field'];
    return locations[Math.floor(Math.random() * locations.length)];
  };

  // Generate random time
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 60);
    const period = Math.random() > 0.5 ? 'AM' : 'PM';
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Format the selected date
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsFormDisabled(true); // Disable the form
    setFormSubmitted(true); // Show success animation

    // Close the form after 8 seconds
    setTimeout(() => {
        setShowForm(false);
        setIsFormDisabled(false); // Re-enable the form for future submissions
        setFormSubmitted(false); // Reset the submitted state
    }, 5000);
};


  

  return (
    <div className="home-container1" ref={closeRef}>
      <Navbar rootClassName="navbarroot-class-name"/>
      <header className="home-header10">
        <h1 className="home-heading10" >Discover Sports Events.</h1>
        <span className="home-caption1">
          Discover and participate in sports events happening nearby for the next two weeks.
        </span>
      </header>
      <br />
      <div>
        <Calendar
          className='calendar'
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <p className='home-caption1'>Event(s) on {formattedDate}</p>
      <div className="home-image17">
        <img
          alt="image"
          src={imageMap[selectedImage]}
          className="img-evnt"
        />
      </div>
      <br />

      <div className="home-get-started1 button">
        <span className="home-text10" onClick={registrationHandler}>Register</span>
      </div>
   
      

      {showForm && (
        <div className="event-form-container"  ref={formRef}>
          <div className={`event-form ${formSubmitted ? 'lottie-animation-submitted' : ''}`}>
            {formSubmitted ? (
              <LottieAnimation className="lottie-animation-submitted" />
            ) : (
              <>
                <p><strong>Location:</strong> {getRandomLocation()}</p>
                <p><strong>Time:</strong> {getRandomTime()}</p>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="name-form name-inputs">
                    <label>
                      First Name:
                      <br />
                      <input type="text" name="firstName" className="input-box" disabled={isFormDisabled} />
                    </label>
                    <label>
                      Last Name:
                      <br />
                      <input type="text" name="lastName" className="input-box" disabled={isFormDisabled} />
                    </label>
                  </div>

                  <div className="attendees-team">
                    <label>
                      Number of attendees:
                      <br />
                      <input type="number" name="players" className="input-box" disabled={isFormDisabled} />
                    </label>
                    <label>
                      Team Name:
                      <br />
                      <input type="text" name="team" className="input-box" disabled={isFormDisabled} />
                    </label>
                  </div>

                  <div className="email-toggle">
                    <label>
                      Email:
                      <br />
                      <input type="text" name="email" className="input-box" disabled={isFormDisabled} />
                    </label>
                    <div className="toggle-container">
                      <label>Email reminders?</label>
                      &nbsp; &nbsp;
                      <ToggleSwitch />
                    </div>
                  </div>

                  <div className="event-location">
                    <div className="calendar-info">
                      <FontAwesomeIcon icon={faCalendarCheck} className='cal-icon' />
                      <p className='home-caption1'>{formattedDate}</p> &nbsp;&nbsp;&nbsp;
                    </div>
                    <br />
                    <MapComponent address={address} />
                  </div>

                  <div className="form-buttons">
                    <button class="close-btn" type="button" onClick={closeHandler}>Close</button> &nbsp;&nbsp;&nbsp;
                    <button type="submit" disabled={isFormDisabled}>Register</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
      <br />
      <main className="home-cards3">
        <Article
          header="Event Booking"
          description="Easily book your spot in upcoming sports events through our platform, ensuring you never miss out on any exciting opportunities to stay active and engaged."
          rootClassName="articleroot-class-name"
        />
        <Article
          header="Community Joining"
          description="Connect with like-minded individuals by joining various sports communities on P L I V E. Share your passion for sports, exchange tips, and engage with fellow enthusiasts."
          rootClassName="event-column"
        />
        <Article
          header="Marketplace"
          description="Browse through a wide selection of sports accessories available for purchase or sale on our platform. Find the gear you need or sell your unused equipment to fellow sports lovers."
          rootClassName="event-column"
        />
      </main>
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
                <span className="home-text53">
                  The best way to book sports events.
                </span>
              </header>
              <span className="home-text54">Contact Us</span>
              <span className="home-text55">Follow Us</span>
            </div>
          </main>
        </div>
      </footer>
    </div>
  );
};

export default Event;
