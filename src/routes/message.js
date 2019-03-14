const express = require("express");

const router = express.Router();

router.get("/", function (req, res, next) {
    res.send("<h1>message</h1>");
});

export default router;
