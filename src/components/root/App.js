import React, { useEffect } from "react";
import Map from "../Map/Map"
import Info from "../Map/Info"
import Navbar from "../Navi/Navbar"
import { SetCounty } from './../../context/actions';
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const {selectedCounty} = useSelector((state) => state);

  useEffect(() => {
    dispatch(SetCounty(5));
  }, [])
  
  useEffect(() => {
    console.log(selectedCounty);
  }, [selectedCounty])

  return (
    <div>
      <Navbar/>
      <Map/>
      <Info/>
    </div>
  );
}

export default App;
