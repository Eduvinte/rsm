import React from "react";
import '../styleSheet/BannerInicio.css';
import NavBar from "../components/NavBar";
import BannerInicio from "../components/BannerInicio";
import About from "../components/About";


function Inicio() {
  return (
    <>
      <NavBar />
      <BannerInicio />
      <About />
    </>
    )
}

export default Inicio;
