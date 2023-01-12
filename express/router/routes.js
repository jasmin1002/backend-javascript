const express = require("express");
const router = express.Router();
const handler = require("../controller/handler");
const { getHome, getAbout, getProduct, postPeople } = handler;

router.get("/", getHome);

router.get("/about", getAbout);

router.get("/api/product/:id", getProduct);

router.post("/api/people", postPeople);

module.exports = router;
