import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

// Create Redux store with persisted state
const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// Save state to local storage on changes
store.subscribe(() => {
    saveState(store);
});

// Render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// Register service worker for offline functionality
serviceWorker.register();
