import React, { useState } from 'react';
import './Marketplace.css'; 
import Navbar from '../components/navbar';

function MarketplacePage() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState({});

  const handleImageClick = (price) => {
    setDialogContent({ price });
    setIsDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
    setDialogContent({});
  };
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    productName: '',
    category: '',
    price: '',
    negotiable: false,
  });

  const handleSellClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setFormData({
      image: null,
      productName: '',
      category: '',
      price: '',
      negotiable: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Product listed successfully!');
    handleCloseForm();
  };


  return (
    <div className='home-container1'>
        <Navbar rootClassName="navbarroot-class-name"></Navbar>
      <h1 className="home-heading10">Marketplace Page</h1>
      <h2 className='home-caption1'>List of products available</h2>
      <h3 className='home-caption1'>Buy</h3>
      <div className="product-images">
        <div className='img-con'>
        <img
          src="/SectionImages/mp1.png"
          alt="Product 1"
          className="product-image"
          onClick={() => handleImageClick('100')}
        />
        </div>
        <img
          src="/SectionImages/mp2.png"
          alt="Product 2"
          className="product-image"
          onClick={() => handleImageClick('200')}
        />
        <img
          src="/SectionImages/mp3.png"
          alt="Product 3"
          className="product-image"
          onClick={() => handleImageClick('300')}
        />
      </div>
      <br/>
      <br/>
      <h4 className='home-caption1'>Got any sport gear which might interest others to buy?</h4>
      <h2 onClick={handleSellClick} className='sell-option home-caption1'>Sell</h2>
      {isDialogVisible && (
        <div className="dialog-overlay">
          <div className="dialog">
            <p className='dia-price'>Price: ${dialogContent.price}</p>
            <div className="dialog-buttons">
              <button onClick={handleCloseDialog} className="close-button">Close</button>
              <button className="buy-now-button">Buy Now</button>
            </div>
          </div>
        </div>
      )}
      {isFormVisible && (
        <div style={formOverlayStyle}>
          <div style={formStyle}>
            <h2>List Your Product</h2>
            <br/>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="image">Upload Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageUpload}
                  required
                />
              </div>
              <br/>
              <div>
                <label htmlFor="productName">Gear Name:</label> &nbsp;
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br/>
              <div>
                <label htmlFor="category"> Category:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br/>
              <div>
                <label htmlFor="price">Price:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br/>
              <div>
                <label htmlFor="negotiable">
                  Negotiable?
                  <input
                    type="checkbox"
                    id="negotiable"
                    name="negotiable"
                    checked={formData.negotiable}
                    onChange={handleInputChange}
                  />
                  <br/>
                </label>
              </div>
              <br/>
              <button type="submit" style={submitButtonStyle}>List Product</button>
              <button type="button" onClick={handleCloseForm} style={closeButtonStyle}>Close</button>
            </form>
          </div>
        </div>
      )}
      <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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
const formOverlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };
  
  const formStyle = {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '400px', // Adjusted width for better alignment
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '1px solid #80FF44',
    textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor', // Adding the green border to match the style in the image
  };
  
  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    width: '80%',
    backgroundColor: '#000', // Background color to match the form
    border: '1px solid #80FF44', // Matching green border for inputs
    color: '#80FF44', // Matching text color
    borderRadius: '5px',
    outline: 'none',
    fontSize: '16px',
  };
  
  const submitButtonStyle = {
    padding: '10px',
    border: 'none',
    backgroundColor: 'black', // Matching green color for the button
    color: '#80FF44',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    width: '80%',
    textTransform: 'uppercase',
    fontSize: '16px',
    textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor',
  };
  
  const closeButtonStyle = {
    padding: '10px',
    border: 'none',
    backgroundColor: 'black', // Matching green color for the button
    color: '#80FF44',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '80%',
    textTransform: 'uppercase',
    fontSize: '16px',
    textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor',
  };
  
export default MarketplacePage;
