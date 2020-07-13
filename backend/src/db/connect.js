import mongoose from "mongoose";
import { url_mongodb_users, url_mongodb_thinker } from "../keys/keys";

// mongoose.connect(url_mongodb_users, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//mongoose.set("useFindAndModify", false);
const connUser = mongoose.createConnection(url_mongodb_users, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
const connThinker = mongoose.createConnection(url_mongodb_thinker, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })


const db = mongoose.connection;
db.once("open", _ => {
    console.log("Database connected:", url_mongodb_users);
});

db.on("error", err => {
    console.error("connection error:", err);
});

export {
    connThinker,
    connUser,
}
