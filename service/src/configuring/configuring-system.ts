import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
const config = {
  port: process.env.PORT || 3002,
  project: {
    name: "rumor-api",
  },
  api: {
    prefix: "/api/",
    version: "/v1",
  },
};

export { config };
