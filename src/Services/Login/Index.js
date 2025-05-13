import axios from "axios";
import routes from "../../configs/api";

export const Login = (loginData) => {
  const loginUrl = routes.LOGIN;

  return axios
    .post(loginUrl, loginData)
    .then((res) => {
      res.data;
    })
    .catch((err) => {
      err;
    });
};
