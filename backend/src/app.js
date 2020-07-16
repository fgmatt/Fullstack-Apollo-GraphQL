import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
//import "./db/connect";
import helloWorldRouter from "./routers/helloWorld";
import server from "./graphQL/apollo-server";
import "./jwt/jwt";

const app = express();
server.applyMiddleware({ app });

app.use(bodyParser.json());
app.use(cors());
app.use("/api", helloWorldRouter);

export default app;
