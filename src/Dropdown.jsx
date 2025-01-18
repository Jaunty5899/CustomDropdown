import "./Dropdown.css";
import { useState } from "react";

export default function Dropdown({ colors }) {
  const [choice, setChoice] = useState("Select Option");
  console.log(colors);
  return (
    <div className="dropDownContainer">
      <div className="dropDownButton">{choice}</div>
      <div className="dropDownList">
        {colors.map((e) => (
          <div className="dropDownOption">{e}</div>
        ))}
      </div>
    </div>
  );
}
