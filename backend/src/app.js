import express from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import csurf from "csurf";
import rateLimit from "express-rate-limit";
//import "./db/connect";
import helloWorldRouter from "./routers/helloWorld";
import server from "./graphQL/apollo-server";
import "./jwt/jwt";

const app = express();
server.applyMiddleware({ app });

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(csurf());
app.use(limiter);
app.use("/api", helloWorldRouter);

export default app;
