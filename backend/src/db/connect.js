import mongoose from "mongoose";
import { url_mongodb } from "../keys/keys";

mongoose.connect(url_mongodb, { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;
db.once("open", _ => {
    console.log("Database connected:", url_mongodb);
});

db.on("error", err => {
    console.error("connection error:", err);
});
