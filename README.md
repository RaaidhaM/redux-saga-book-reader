
# Getting Started with redux-saga
This guide walks you through the project structure and how to run the application using Redux-Saga for state management.


# project-structure 

 src->app->actions->userActions 
 Contains JavaScript objects that describe the actions performed within the app. Each action may include a payload, which is typically the response or data associated with the action.

 src->app->reducers->index.js
 Holds the initial state values and manages the modifications to the state based on the dispatched actions. It operates on the existing state object and returns a new version of the state, ensuring the state remains predictable and immutable.

 src->app->sagas->index.js
 Defines generator functions (sagas) that handle side effects triggered by specific actions. These sagas use Redux-Saga effects such as takeEvery, call, and put to manage asynchronous tasks efficiently.

 src->app->storage->index.js
 Configures and creates the Redux store, linking it to Redux-Saga middleware for handling side effects.

 src->app.js
 Contains the logic for rendering the UI components based on the current application state.

 src->index.js
 Acts as the entry point of the application, connecting the Redux store to the app.


# Run the application 
 To start the application in development mode, run "npm run start". Once the app is compiled, open http://localhost:3000 in your browser to view the application.


# next-level
 This repository covers the basics of Redux-Saga. If you're ready to take your understanding to the next level, check out https://www.google.com/
