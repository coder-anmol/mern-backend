var express = require("express");
var router = express.Router();
var getData = require("../fileReader");

router.get("/", (req, res) => {
    res.send({
        status: "ok",
    });
});

router.get("/api", async function (req, res) {
    const data = await getData().then((res) => res);
    res.json(data);
});

module.exports = router;
