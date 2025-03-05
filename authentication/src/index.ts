import express from "express";
import cors from "cors";

import apiRoutes from "./routes";
import serverConfig from "./config/serverConfig";
import db from "./config/dbConnect";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

const PORT = serverConfig.PORT;
app.listen(PORT, async () => {
    console.log("Server is running on PORT:", PORT);
    await db.connect();
    console.log("Current database status is:", db.getConnectionStatus());
});