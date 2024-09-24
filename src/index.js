// import 'bootswatch/dist/darkly/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom/client";
// import './styles/index.css';
import './styles/index.scss';

import App from "./App";
import * as serviceWorker from "./server/serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

// Create Redux store with persisted state
const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// Subscribe to store changes to save state to local storage
store.subscribe(() => {
    saveState(store.getState());
});

// Render the React application
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// Register service worker for offline functionality
serviceWorker.register();
