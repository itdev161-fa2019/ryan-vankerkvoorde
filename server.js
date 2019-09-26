import express from "express";
import connectDatabase from "./config/db";

//Init express application
const app = express();

//Connect db
connectDatabase();

//API endpoints
app.get("/", (req, res) =>
  res.send("http get request sent to root api endpoint")
);

//Connection Listener
app.listen(3000, () => console.log("Express server running on port 3000"));
