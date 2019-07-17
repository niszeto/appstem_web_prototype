import React from "react";
import ImageState from "./context/image/ImageState";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <ImageState>
      <div className="App">
        <Home />
      </div>
    </ImageState>
  );
}

export default App;
