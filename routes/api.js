const express = require("express");
const router = express.Router();
const getData = require("../database");

router.get("/", async (req, res) => {
    const data = await getData().then((res) => res);

    const routesList = Object.keys(data.routes);
    const routes = [];
    routesList.forEach((route) => {
        routes.push({
            path: route,
            url: req.protocol + "://" + req.get("host") + "/api" + route,
        });
    });

    res.json({
        status: "active",
        routes: routes,
    });
});

router.get("/home", async (req, res) => {
    const data = await getData().then((res) => res);
    res.json(data.routes["/home"]);
});

router.get("/about", async (req, res) => {
    const data = await getData().then((res) => res);
    res.json(data.routes["/about"]);
});

router.get("/contact", async (req, res) => {
    const data = await getData().then((res) => res);
    res.json(data.routes["/contact"]);
});

router.get("/projects", async (req, res) => {
    const data = await getData().then((res) => res);
    res.json(data.routes["/projects"]);
});

module.exports = router;
