export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      // This will always run regardless of success or failure
      console.log('Got a response from the API');
    });
}
