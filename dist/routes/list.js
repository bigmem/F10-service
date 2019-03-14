"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _test = require("../services/test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", async function (req, res, next) {
  let result = null;

  try {
    const {
      code,
      msg,
      data
    } = await (0, _test.getTestData)(1); // 这里根据前端需要的额格式处理
    // 或者直接返回请求到的数据

    if (code === 200) {
      result = {
        status: code,
        success: true,
        message: msg,
        data: data
      };
    } else {
      result = {
        status: code,
        success: true,
        message: msg,
        data: null
      };
    }
  } catch (error) {
    const {
      message
    } = error;
    result = {
      status: 500,
      success: false,
      message: "服务器端发生了错误",
      data: null
    };
  }

  res.json(result);
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=list.js.map
