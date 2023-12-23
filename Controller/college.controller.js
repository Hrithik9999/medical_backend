const college = require("../Model/college.model");

// create a college function

exports.CollegePostFunction = async (req, res) => {
  const {
    college_name,
    city,
    state,
    affilation,
    category,
    specilization,
    college_fees,
    contact,
  } = req.body;

  try {
    const collegeData = await college.create({
      college_name,
      city,
      state,
      affilation,
      category,
      specilization,
      college_fees,
      contact,
    });
    res.status(200).json(collegeData);
  } catch (error) {
    console.log(error);
  }
};

// get a college function

exports.collegeGetFunction = async (req, res) => {
  try {
    const collegeData = await college.find();
    res.status(200).json(collegeData);
  } catch (error) {
    console.log(error);
  }
};

// get a single college function

exports.collegeGetSingleFunction = async (req, res) => {
  const { id } = req.params;
  try {
    const collegeData = await college.findById({ _id: id });
    res.status(200).json(collegeData);
  } catch (error) {
    console.log(error);
  }
};

// update a college function

exports.collegeUpdateFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      college_name,
      city,
      state,
      affilation,
      category,
      specilization,
      college_fees,
      contact,
    } = req.body;
    const collegeData = await college.findByIdAndUpdate(
      id,
      {
        college_name,
        city,
        state,
        affilation,
        category,
        specilization,
        college_fees,
        contact,
      },
      { new: true }
    );
    await collegeData.save();
    res.status(200).json(collegeData);
  } catch (error) {
    console.log(error);
  }
};

// delete a college function

exports.collegeDeleteFunction = async (req, res) => {
  const { id } = req.params;
  try {
    const collegeData = await college.findByIdAndDelete(id);
    res.status(200).json(collegeData);
  } catch (error) {
    console.log(error);
  }
};
