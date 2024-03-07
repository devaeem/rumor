import express from "express";

const router = express.Router();
const { list } = require("./pattern.contrroller.min");

router.get("/pattern", list);

module.exports = router;
