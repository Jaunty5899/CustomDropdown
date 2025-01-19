import "./Dropdown.css";
import { useState } from "react";

export default function Dropdown({ colors }) {
  const [toggle, setToggle] = useState(false);
  const [choice, setChoice] = useState("Select Option");
  return (
    <div className="dropDownContainer">
      <div className="dropDownButton" onClick={() => setToggle(true)}>
        {choice}
      </div>
      <div className={`dropDownList ${toggle && "active"}`}>
        {colors.map((e) => (
          <div
            className={`dropDownOption ${e == choice && "activeMarker"}`}
            onClick={() => {
              setChoice(e);
              setToggle(false);
            }}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
