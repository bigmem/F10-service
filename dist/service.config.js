"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testInterface = void 0;
const baseUrl = "http://test.fgxblogs.com/api";

function service(config) {
  const {
    method,
    path
  } = config;
  let serviceUrl = baseUrl;

  if (path[0] !== '/') {
    serviceUrl = serviceUrl + '/';
  }

  serviceUrl = serviceUrl + path;
  return {
    httpMethod: method,
    servicePath: path,
    serviceUrl: serviceUrl
  };
} //
// export const services = {
//     testInterface: service({
//         method: "get",
//         servicePath: "/testInterface",
//     }),
// };


const testInterface = service({
  method: "get",
  path: "/testInterface"
});
exports.testInterface = testInterface;
//# sourceMappingURL=service.config.js.map
