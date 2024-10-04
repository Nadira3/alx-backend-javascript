function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promise) {
        resolve(
          {
            status: 200,
            body: 'Success',
          },
        );
      } else {
        reject(new Error());
      }
    }, 1000);
  });
}

handleResponseFromAPI(true)
  .finally(() => {
    console.log('Got a response from the API');
  });

export default handleResponseFromAPI;
