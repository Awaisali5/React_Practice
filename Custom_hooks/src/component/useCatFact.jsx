import React from "react";
import axios from "axios";

export const useCatFact = () => {
  const  data  =axios.get("https://catfact.ninja/facts/")
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
    

return {data}

};

