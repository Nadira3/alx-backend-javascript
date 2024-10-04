function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'Success',
    }))
    .catch(() => {
      // Reject with a new Error when the promise is rejected
      throw new Error('API request failed');
    })
    .finally(() => {
      // This block runs no matter if the promise resolves or rejects
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
