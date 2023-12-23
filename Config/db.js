const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set({ strictQuery: false });

mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Medical Admission db.Connected Sucessfully"))
  .catch((err) => console.log(err));
