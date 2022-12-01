import React, { useEffect, useState } from "react";
import { DolarData } from "../functions/DolarFunction";
import "../styleSheet/ShoData.css";

const Dolar = () => {


  setInterval(() => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    if(h == 13 && m == 0 && s == 1){
      window.location.reload();
    }
  }, 1000)
    

    


  const [dolarData, seDolarData] = useState(null);

  useEffect(() => {
    DolarData(seDolarData);
  }, []);

  

  return (
    <>
      {dolarData != null
        ? [dolarData].map((dolars) => (
            <div id="dolar" key={dolars}>
              <h2>{dolars.data.Dolares[0].Valor}</h2>
              <span id={dolarData != null ? "envivo" : "off"}>
                <li></li>
              </span>
            </div>
          ))
        : "No hay valores disponibles"}
    </>
  );
};

export default Dolar;
