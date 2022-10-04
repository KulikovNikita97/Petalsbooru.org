import store from "./redux/redux-store"
import React from 'react';
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ImagesContainer from './Components/Images/ImagesContainer';
import ProfileContainer from './Components/Images/Profile/ProfileContainer'

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<ImagesContainer />} />
          <Route path="/images" element={<ProfileContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals