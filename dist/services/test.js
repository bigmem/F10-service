"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTestData = getTestData;
exports.default = void 0;

var _httpClient = _interopRequireDefault(require("../utils/http-client"));

var _service = require("../service.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getTestData(id) {
  return await _httpClient.default.request(_service.testInterface, {
    id
  });
}

var _default = {
  getTestData
};
exports.default = _default;
//# sourceMappingURL=test.js.map
