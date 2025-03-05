import express from "express";
import v1Routes from "./v1";

const apiRoutes = express.Router();

apiRoutes.use("/v1", v1Routes);

export default apiRoutes;
