// package axios functions

//Reference:
// http://www.enjoytoday.cn/2021/01/04/react%e5%ba%94%e7%94%a8%e4%b8%ad%e5%b0%81%e8%a3%85axios/ 

import axios from "axios";

axios.defaults.timeout = 100000;
// axios.defaults.baseURL = "http://xxx/";

axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            "Content-Type": "application/json",
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
/**
 * export get()
 * @param url  Request url
 * @param params  request params
 * @returns {Promise}
 */
export function get(url, params = {}) {
    axios.get(url/*, { jwt_token: JSON.parse(localStorage.getItem("token")) }*/)

        .then(result => {
            // console.log("Fetched all posts", result);
            setPosts(result.data);
        })
        .catch(error => {
            alert(error);
        });
}

function msg(err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                alert(err.response.data.error.details);
                break;
            case 401:
                alert("Unautherized, please log in!");
                break;

            case 403:
                alert("Access Denied");
                break;

            case 404:
                alert("Request Address Error");
                break;

            case 408:
                alert("Timeout!");
                break;

            case 500:
                alert("Server Internal Error");
                break;

            case 501:
                alert("Service unfilfilled");
                break;

            case 502:
                alert("Gateway Error");
                break;

            case 503:
                alert("Service Unavailiable");
                break;

            case 504:
                alert("Gateway Timeout");
                break;

            case 505:
                alert("HTTP Version Unsupported");
                break;
            default:
                alert("Unknown Error!")
        }
    }
}

export {
    msg, getArticleList
};
