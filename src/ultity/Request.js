import axios from "axios";
import { TOKEN } from "./ConfigWeb";
export const callApi = (url = "", method = "", data = {}) => {
  const config = {};
  const token = localStorage.getItem(TOKEN);
  if (token) {
    config.headers = {
      Authorization: "Bearer " + token,
    };
  }
  return axios({
    url: url,
    method: method,
    data: data,
    ...config,
  });
};
export default callApi;
