# React Native State Variable Not Updating

This repository demonstrates a common error in React Native: directly modifying a state variable without using the `setState` method. This leads to the UI not reflecting changes in the state.

The `bug.js` file showcases the incorrect implementation. The `bugSolution.js` file provides the correct implementation using `setState`.

## How to reproduce the bug:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the app.
4. Observe that changes to the state variable in `bug.js` do not update the UI.

## How to fix the bug:
The solution is to use the `setState` method provided by React Native to update the state variable.  See `bugSolution.js` for the correct implementation.  `setState` triggers a re-render, ensuring the UI correctly reflects the updated state.