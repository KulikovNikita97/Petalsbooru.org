import { combineReducers, createStore } from "redux";
import imagesReducer from "./imagesReducer";

let reducers = combineReducers({
    imagesPage: imagesReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;