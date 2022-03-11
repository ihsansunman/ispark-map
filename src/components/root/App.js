import React from "react";
import Map from "../Map/Map"
import Info from "../Map/Info"
import Navbar from "../Navi/Navbar"
import "./App.scss"

function App() {

  return (
    <div>
      <Navbar/>
      <Map className="map"/>
      <Info className="info"/>
    </div>
  );
}

export default App;
