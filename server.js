if (process.env.NODE_ENV !== "production") {
  require("dotenv").load;
}

const express = require("express");
const app = express();
const expresslayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const indexrouter = require("./controller=routers/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expresslayouts);
app.use(express.static("public"));
app.use("/", indexrouter);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.error("connected to mongosse"));

app.listen(process.env.PORT || 3000);
