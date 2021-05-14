import React, { useState, useEffect } from "react";
import Speech from "./Speech";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      APP.js
      {!show && <button onClick={() => setShow(true)}>Show Component</button>}
      {show && <Speech />}
      {show && <button onClick={() => setShow(false)}>Remove Component</button>}
    </div>
  );
}

export default App;
