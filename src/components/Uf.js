import React, { useEffect, useState } from "react";
import { UfData } from "../functions/Ufunction";

const Uf = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    UfData(setData);
  }, []);

  return (
    <>
      {data != null
        ? [data].map((ufs) => (
            <div key={ufs}>
              <h2>
                {ufs.data.UFs[0].Valor}
              </h2>
              <span id={data != null ? "envivo" : "off"}>
                  <li></li>
                </span>
            </div>
          ))
        : "No hay valores disponibles"}
    </>
  );
};

export default Uf;
