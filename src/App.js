import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h1>Online Store</h1>
      <hr></hr>
      <div style={{display:'flex',justifyContent:'center'}}>
        {data.map((value, index) => (
          <div style={{backgroundColor:'orange',margin:'5px',padding:'10px'}} key={index}>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <button>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
