"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const express = require("express");

const router = express.Router();
router.get("/", function (req, res, next) {
  res.send("<h1>message</h1>");
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=message.js.map
