import axios from "axios";

const DolarData = async (state) => {
  const peticion = await axios.get(
    "https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=87fbf59f252f1ae0dc1ecd94c2e5ceb4e80809f1&formato=json"
  );
  
  state(peticion)
};

export { DolarData };
