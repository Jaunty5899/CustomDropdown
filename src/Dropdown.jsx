import "./Dropdown.css";
import { useState } from "react";

export default function Dropdown({ colors }) {
  const [choice, setChoice] = useState(0);
  return (
    <div className="dropDownContainer">
      <div className="dropDownButton"></div>
      <div className="dropDownList">
        {colors.forEach((e) => (
          <div className="dropDownOption">{e}</div>
        ))}
      </div>
    </div>
  );
}
