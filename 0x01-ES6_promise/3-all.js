import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Collectively handle promises from uploadPhoto and createUser
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // Log the body, firstName, and lastName from resolved promises
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log error message if either of the promises fail
      console.log('Signup system offline');
    });
}
