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

router.get("/:path", (req, res) => {
    res.send({
        status: "failed",
        requestPath: req.params.path,
    }).sendStatus(404);
});
module.exports = router;
