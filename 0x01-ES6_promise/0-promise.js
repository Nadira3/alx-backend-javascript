function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Response from API');
      reject(new Error('Rejected response from API'));
    }, 2000);
  });
}

export default getResponseFromAPI;
