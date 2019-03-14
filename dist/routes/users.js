"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const express = require("express");

const router = express.Router();
router.get("/", function (req, res, next) {
  res.send("<h1>users</h1>");
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=users.js.map
