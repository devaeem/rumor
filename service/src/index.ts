import express, { Express, Response, Request } from "express";
import * as configuringSystem from "./configuring";

const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app: Express = express();
const port: Number = Number(configuringSystem.config.port);

const apiRoutes = require("./routes/routes");

app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(morgan("dev"));

app.use(configuringSystem.config.api.prefix, apiRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(configuringSystem.config.project.name);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
