import React, { useState } from "react";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  function ToggleSwitch() {
    setIsToggled(!isToggled);
  }
  return (
    <div>
      <label>
        <input type="checkbox" name="checkbox" onChange={ToggleSwitch} id="" />
      </label>
      <p>{isToggled ? "On" : "off"}</p>
    </div>
  );
}

export default ToggleSwitch;
