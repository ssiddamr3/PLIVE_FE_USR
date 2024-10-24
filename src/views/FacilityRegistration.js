import React, { useState } from 'react';
import './FacilityRegistration.css';

function FacilityRegistrationForm({ onClose }) {
  const [name, setName] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [date, setDate] = useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Time Slot:', timeSlot);
    console.log('Date:', date);
    console.log('Number of Players:', numberOfPlayers);
    alert('Registration successful!');
    onClose();
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 21; hour++) {
      const time = new Date();
      time.setHours(hour, 0, 0, 0);
      const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      slots.push(formattedTime);
    }
    return slots;
  };

  return (
    <div className="form-container">
      <h2 className='register-title'>Reserve the facility</h2>
      <form className='future-register-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Time Slot:</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="facility-select"
            required
          >
            <option value="">Select a time slot</option>
            {generateTimeSlots().map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPlayers">Number of Players:</label>
          <input
            type="number"
            id="numberOfPlayers"
            value={numberOfPlayers}
            onChange={(e) => setNumberOfPlayers(e.target.value)}
            required
          />
        </div>
        <div className="form-buttons">
          <button className="register-submit" type="submit">Pay to Register</button>
          <button className="register-submit" type="button" onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
}

export default FacilityRegistrationForm;
