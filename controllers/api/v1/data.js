const Data = require("../../../models/Data.js"); // Import the Data model

// New route for saving image and boolean data
const saveImageData = async (req, res) => {
  const { image, option } = req.body; // Assuming you are sending image and option in the request body

  const newData = new Data({
    image,
    option,
  });

  try {
    const savedData = await newData.save();
    res.json({
      status: "success",
      message: "POSTING new image and boolean data",
      data: {
        savedData,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to save image and boolean data",
    });
  }
};

// New route for retrieving all image and boolean data
const getAllImageData = async (req, res) => {
  try {
    const allData = await Data.find({});
    res.json({
      status: "success",
      message: "GETTING all image and boolean data",
      data: {
        allData,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to get image and boolean data",
    });
  }
};

module.exports = {
  saveImageData,
  getAllImageData,
};
