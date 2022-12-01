import React from "react";
import NavBar from "../components/NavBar";
import Banner from '../components/Banner';
import ShowData from "../components/ShowData";

// Import Archives
import "bootstrap/dist/css/bootstrap.min.css";
import "../styleSheet/ViewData.css";

function ViewData() {
  return (
    <>
      <NavBar />
      <Banner />
      <ShowData />
    </>
  );
}

export default ViewData;
