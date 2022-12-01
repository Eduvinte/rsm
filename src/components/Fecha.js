import React from "react";
import { Fechas } from "../functions/FechaFunction";
import { useState, useEffect } from "react";
function Fecha() {
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    Fechas(setFecha);
  }, []);

  return (
    <>
      {fecha != null
        ? [fecha].map((fechas) => (
            <div key={fechas}>
              <h2>
                {fechas.data.UFs[0].Fecha}
              </h2>
              <span id={fecha != null ? "envivo" : "off"}>
                  <li></li>
                </span>
            </div>
          ))
        : "No hay valores disponibles"}
    </>
  );
}

export default Fecha;
