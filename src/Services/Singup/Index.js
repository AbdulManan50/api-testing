import axios from "axios";
import routes from "../../configs/api";

export const singup = (signData) => {
  const singupurl = routes.SINGUP;

  return axios
    .post(singupurl, signData)
    .then((res) => {
      return res.data; 
    })
    .catch((err) => {
       err; 
    });
};
