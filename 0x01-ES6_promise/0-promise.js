export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Randomly resolve or reject the Promise
      if (Math.random() < 0.5) {
        resolve({
          status: 200,
          body: 'photo-profile-1',
        });
      } else {
        reject(new Error('Failed to fetch data from API'));
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Example usage
