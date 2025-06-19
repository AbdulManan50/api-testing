// services.js
import axios from "axios";
import routes from "../../configs/api"; 

export const SsoLogin = (googletoken) => {
  const GoogleURL = routes.GOOGLE;
  return axios
    .post(GoogleURL,  googletoken ) 
    .then((res) => res.data)
    .catch((err) => {
      console.error("Google API error:", err.response || err);
      throw err;
    });
};
