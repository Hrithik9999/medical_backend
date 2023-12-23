const mongoose = require("mongoose");

const college_schema = new mongoose.Schema({
  college_name: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
  affilation: {
    type: [String],
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  specilization: {
    type: [String],
    required: true,
  },
  college_fees: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

const college = new mongoose.model("college", college_schema);

module.exports = college;
