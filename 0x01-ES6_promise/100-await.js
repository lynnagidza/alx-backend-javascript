const { uploadPhoto, createUser } = require('./utils.js');

async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

module.exports = asyncUploadUser;
