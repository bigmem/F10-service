const express = require("express");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("<h1>users</h1>");
});

export default router;
