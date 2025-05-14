import axios from "axios";
import routes from "../../configs/api";

export const Login = (loginData) => {
  const loginUrl = routes.LOGIN;

  return axios
    .post(loginUrl, loginData)
    .then((res) => {
      console.log("Helo", res)
      return res.data;
    })
    .catch((err) => {
      console.log("Helo", err.response)
      
      return err.response  ;
    });
};
