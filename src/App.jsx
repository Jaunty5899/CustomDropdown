import "./App.css";
import Dropdown from "./Dropdown";

const data = ["Red", "Green", "Blue", "Alpha"];

function App() {
  return (
    <div className="container">
      <Dropdown colors={data} />
    </div>
  );
}

export default App;
