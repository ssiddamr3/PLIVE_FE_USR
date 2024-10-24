import React, { useState } from 'react';
import './GroupChat.css'; 
import './home.css'
import Navbar from '../components/navbar';
// Ensure you have corresponding styles for these classes

const sampleMessages = [
  { id: 1, sender: 'Sai', text: 'Hello everyone!' },
  { id: 2, sender: 'Nikhil', text: 'Hi Sai, how are you?' },
  { id: 3, sender: 'Jaggu', text: 'Good afternoon!' },
];

const sampleMembers = ['Sai', 'Jaggu', 'Nikhil', 'David', 'Eve'];

const GroupChat = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMessageObj = {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage,
      };
      setMessages((prevMessages) => [...prevMessages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div className="home-container1">
        {/* <Navbar rootClassName="navbarroot-class-name" /> */}
      <div className="chat-sidebar">
        <h3 className='gm-text'>
        <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image10 avatar styler"
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
              </div>
              Group Members
        </h3>
        <ul>
          {sampleMembers.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
      <br/>
      <div className="chat-window">
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <strong>{message.sender}:</strong> <span>{message.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="home-input-field type-space"
          />
          &nbsp;
          <div className="home-buy4 button">
                  <span className="home-text67">-&gt;</span>
                  <span className="home-text68">
                    <span>Send</span>
                    <br></br>
                  </span>
                </div>
        </form>
      </div>
    </div>
  );
}

export default GroupChat;
