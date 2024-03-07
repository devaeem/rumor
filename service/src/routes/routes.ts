import express from "express";
import * as configuringSystem from "../configuring";
const router = express.Router();

const patternRoutes = require("../modules/pattern/pattern-routes");

router.use(configuringSystem.config.api.version, patternRoutes);
module.exports = router;
