const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (file, folder) => {
  try {
    const uploadedResponse = await cloudinary.uploader.upload(file, {
      folder: `Devto clone/${folder}`,
    });
    return uploadedResponse;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadToCloudinary };
