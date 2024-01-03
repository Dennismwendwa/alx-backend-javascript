import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise,nuserPromise])
    .then((data) => {
      const result = Object.assign(...data);
      console.log(`${result.body} ${result.firstName} ${result.lastName}`);
    })
    .catch(() =>
      console.log('Signup system offline'));
}
export default handleProfileSignup;
