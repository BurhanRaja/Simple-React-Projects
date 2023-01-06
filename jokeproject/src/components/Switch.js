import React from 'react';
import "../css/Switch.css";

function Switch({setSwitch}) {
  return (
    <div className="switch-toggle">
        <input type="checkbox" onChange={(e) => setSwitch(e.target.checked)} />
    </div>
  )
}

export default Switch