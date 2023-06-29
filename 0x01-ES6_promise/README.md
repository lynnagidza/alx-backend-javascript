# Project Name

ES6 Promises Learning Curriculum

## Description

This project is a curriculum designed to help students learn JavaScript promises, specifically focusing on ES6 Promises. It includes a series of tasks and exercises that cover various aspects of promises and asynchronous programming in JavaScript.

## Tasks

1. **Keep every promise you make and only make promises you can keep**

   - Implement a function `getResponseFromAPI()` that returns a Promise.
   - Test if the returned value is an instance of Promise.

2. **Don't make a promise...if you know you can't keep it**

   - Implement a function `getFullResponseFromAPI(success)` that returns a Promise.
   - Resolve the promise with an object containing `status: 200` and `body: 'Success'` when `success` is `true`.
   - Reject the promise with an error object containing the message "The fake API is not working currently" when `success` is `false`.

3. **Catch me if you can!**

   - Implement a function `handleResponseFromAPI(promise)` that accepts a Promise as an argument.
   - Append three handlers to the function:
     - When the Promise resolves, return an object with `status: 200` and `body: success`.
     - When the Promise rejects, return an empty Error object.
     - Log "Got a response from the API" to the console for every resolution.

4. **Handle multiple successful promises**

   - Import `uploadPhoto` and `createUser` functions from `utils.js`.
   - Implement a function `handleProfileSignup()` that uses the two imported functions.
   - Collectively resolve all promises and log `body`, `firstName`, and `lastName` to the console.
   - Log "Signup system offline" to the console in case of an error.

5. **Simple promise**

   - Implement a function `signUpUser(firstName, lastName)` that returns a resolved promise with an object containing the provided `firstName` and `lastName`.

6. **Reject the promises**

   - Implement a function `uploadPhoto(filename)` that returns a Promise.
   - The Promise should reject with an error containing the message `$fileName cannot be processed`.

7. **Handle multiple promises**

   - Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.
   - Implement a function `handleProfileSignup(firstName, lastName, fileName)` that calls the two imported functions.
   - Return an array with the following structure:
     ```javascript
     [
       { status: status_of_the_promise, value: value or error returned by the Promise },
       // ...
     ]
     ```

8. **Load balancer**

   - Implement a function `loadBalancer(chinaDownload, USDownload)` that accepts two Promises.
   - Return the value returned by the promise that resolves first.

9. **Throw error / try catch**

   - Implement a function `divideFunction(numerator, denominator)` that accepts two numbers.
   - If the `denominator` is 0, throw a new error with the message "Cannot divide by 0".
   - Otherwise, return the result of dividing the `numerator` by the `denominator`.

10. **Throw an error**

    - Implement a function `guardrail(mathFunction)` that accepts a function `mathFunction`.
    - Create and return an array named `queue`.
    - When the `mathFunction` is executed, append the value returned by the function to the `queue`.
    - If the `mathFunction` throws an error, append the error message to the `queue`.
    - In all cases, append the message "Guardrail was processed" to the `queue`.

11. **(Bonus) Promise all**

    - Implement a function `promisesAll(promises)` that accepts an array of Promises.
    - Return a Promise that resolves to an array of the resolved values of all the input Promises.
    - If any of the input Promises reject, the returned Promise should reject with the reason of the first rejected Promise.

## Resources

- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promises: An Introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [ES6 Promises: Patterns and Anti-Patterns](https://www.sitepoint.com/promises-patterns-anti-patterns/)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
