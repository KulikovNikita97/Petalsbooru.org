import { combineReducers, configureStore } from "redux";
import imagesReducer from "./imagesReducer";

let reducers = combineReducers({
    imagesPage: imagesReducer,
});

let store = configureStore(reducers);

window.store = store;

export default store;