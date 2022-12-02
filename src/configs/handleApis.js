import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const retryCodes = [408, 500, 502, 503, 504, 522, 524];
const successCodes = [200, 201, 202];

let access_token = Cookies.get("token");
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

/**
 * Retry call API limit 3 times
 *
 */
async function retryHandleApis(url, method, data, retries = 3, backoff = 100) {
  return axios({
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: "Bearer " + ((data && data.token) || access_token),
      "Access-Control-Allow-Methods": "*",
    },
    mode: "cors",
  })
    .then(function (res) {
      if (successCodes.includes(res.status)) {
        return res;
      }
      if (retries > 0 && retryCodes.includes(res.status)) {
        setTimeout(() => {
          return retryHandleApis(
            url,
            method,
            data,
            retries - 1,
            backoff * 2
          ); /* 3 */
        }, backoff);
      } else {
        throw new Error(res);
      }
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        message.error("Error: ", error.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      return error.response;
    });
}

export default retryHandleApis;
