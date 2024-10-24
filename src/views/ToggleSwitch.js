import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import the CSS for styling

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={handleToggle}
        className="toggle-switch-checkbox"
        id="toggle-switch"
      />
      <label className="toggle-switch-label" htmlFor="toggle-switch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
