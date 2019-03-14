"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseParam = params => {
  const results = [];
  Object.keys(params).forEach(paramName => {
    results.push(paramName, "=", params[paramName], "&");
  });
  results.pop();
  return results.join("");
}; // class HttpClient {
//
//     // constructor(baseUrl) {
//     //     this.baseUrl = baseUrl;
//     // }
//     //
//     // setBaseUrl(baseUrl) {
//     //     this.baseUrl = baseUrl;
//     // }
//     //
//     // getBaseUrl() {
//     //     return this.baseUrl;
//     // }
//     //
//     // async get(path, params) {
//     //     return HttpClient.doGet(`${this.baseUrl}${path}`, params);
//     //
//     // }
//     //
//     // async post(path, params) {
//     //     return HttpClient.doPost(`${this.baseUrl}${path}`, params);
//     // }
//     //
//     static async doGet(url, params) {
//         let queryString = parseParam(params);
//
//         if (url.includes("?")) {
//             queryString = `&${queryString}`;
//         } else {
//             queryString = `?${queryString}`;
//         }
//
//         return fetch(`${url}${queryString}`, {
//             method: "get",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }).then((res => res.json()));
//     }
//
//     static async doPost(url, params) {
//         return fetch(url, {
//             method: "post",
//             body: params ? JSON.stringify(params) : undefined,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }).then((res => res.json()));
//     }
//
//     static async request(config, params) {
//         const {
//             httpMethod,
//         } = config;
//
//         switch (httpMethod) {
//             case "get":
//                 return HttpClient.doGet(config.serviceUrl, params);
//             case "post":
//                 return HttpClient.doPost(config.serviceUrl);
//         }
//     }
//
// }
//
//
// export function setBaseUrl(baseUrl) {
//     httpClient.setBaseUrl(baseUrl);
// }
//
// export function getBaseUrl() {
//     return httpClient.baseUrl;
// }
//
// export async function get(url, params) {
//     const queryString = parseParam(params);
//
//     return fetch(`${this.baseUrl}${path}`, {
//         method: "get",
//         body: params ? JSON.stringify(params) : undefined,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }).then((res => res.json()));
// }
//
// export async function post(url, params) {
//     return fetch(``, {
//         method: "post",
//         body: params ? JSON.stringify(params) : undefined,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }).then((res => res.json()));
// }
//
// const httpClient = new HttpClient();


async function doGet(url, params) {
  let queryString = parseParam(params);

  if (url.includes("?")) {
    queryString = `&${queryString}`;
  } else {
    queryString = `?${queryString}`;
  }

  return (0, _nodeFetch.default)(`${url}${queryString}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

async function doPost(url, params) {
  return (0, _nodeFetch.default)(url, {
    method: "post",
    body: params ? JSON.stringify(params) : undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

async function request(config, params) {
  const {
    httpMethod
  } = config;

  switch (httpMethod) {
    case "get":
      return doGet(config.serviceUrl, params);

    case "post":
      return doPost(config.serviceUrl);
  }
}

var _default = {
  request
};
exports.default = _default;
//# sourceMappingURL=http-client.js.map
