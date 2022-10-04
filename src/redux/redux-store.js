import { combineReducers, createStore } from "redux";
import imagesReducer from "./imagesReducer";
import profileReducer from './profileReducer';

let reducers = combineReducers({
    imagesPage: imagesReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;