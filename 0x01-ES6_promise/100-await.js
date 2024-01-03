import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);
    
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error('Error during asyncUploadUser:', error.message);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
