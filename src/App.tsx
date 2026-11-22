import { useState } from "react";
import "./App.css";

function App() {
  const [showPass, setShowPass] = useState<boolean>(true);
  const [color, setColor] = useState<string>("red");
  const [list, setListItems] = useState<Array<string>>([
    "Navid",
    "Paki",
    "Nima",
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [range, setRange] = useState<number>(0);
  const appear = () => {
    setShowPass((prev) => !prev);
  };
  const addup = () => {
    setListItems((prev) => [...prev, inputText]);
  };
  const clear = () => {
    setListItems((prev) => []);
  };
  return (
    <div>
      {/* {inputText} */}
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        type={showPass ? "password" : "text"}
      />
      <ul>
        {" "}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={addup}>Add To List</button>
      <input
        onChange={(e) => {
          setColor(e.target.value);
        }}
        type="color"
      />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color,
          margin: "0 auto",
        }}
      ></div>
      <button onClick={appear}>Change Type {color}</button>
      <button onClick={clear}>clear</button>
      <label> Your Star</label>
      <input
        type="range"
        min={0}
        max={5}
        onChange={(e) => setRange(+e.target.value)}
      ></input>
      {range === 0 && "Ridi Golam"}
      {range === 1 && "Bad"}
      {range === 2 && "Not Bad"}
      {range === 3 && "Good"}
      {range === 4 && "Welldone"}
      {range === 5 && "Supreme"}
    </div>
  );
}

export default App;

// <input type="range" min={0} max={5} onChange={(e)=> console.log( typeof +e.target.value)}></input>
