// src > components > ToggleButton.jsx

import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`toggle-button ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="toggle-circle" />
    </button>
  );
}

export default ToggleButton;