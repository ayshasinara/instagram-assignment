const express = require("express");
const authRouter = require("./routes/auth");
const connection = require("./storage/db");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/auth", authRouter);
app.listen(8080, async () => {
  await connection;
  console.log("db connected");
  console.log("server started on 8080");
});
