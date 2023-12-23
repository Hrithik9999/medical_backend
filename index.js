const express = require("express");
require("./Config/db");
require("dotenv").config();

const college_routes = require("./college.routes");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/medical", college_routes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
