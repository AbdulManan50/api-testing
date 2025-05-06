import axios from "axios";
import routes from "../../configs/api";

export const singup = (loginData) => {
  const singupurl = routes.LOGIN;

  return axios
    .post(singupurl, loginData)
    .then((res) => {
      return res.data; 
    })
    .catch((err) => {
       err; 
    });
};
