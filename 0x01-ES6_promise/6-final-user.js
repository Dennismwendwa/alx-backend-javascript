import signUpUser from './4-user-promise';
import upLoadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = upLoadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => (
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }))
    ));
}
