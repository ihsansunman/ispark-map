import React from "react";
import Map from "./components/Map/Map"
import Info from "./components/Map/Info"
import Navbar from "./components/Navi/Navbar"

function App() {

  return (
    <div>
      <Navbar/>
      <Map/>
      <Info/>
    </div>
  );
}

export default App;
