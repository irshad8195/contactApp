import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from './reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
 import { Provider } from 'react-redux';
 
 const store = createStore(contactReducer, composeWithDevTools());

 //const root = createRoot(document.querySelector('#root'));


//import rootReducer from './reducers';
//configureStore
// const store = createStore(rootReducer)
// console.log('store', store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
         <Router>
             <App />
         </Router>
     </Provider>
  </React.StrictMode>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import { createStore } from 'redux';
// // import contactReducer from './redux/reducers/contactReducer';
// // import { composeWithDevTools } from 'redux-devtools-extension';
//  import { Provider } from 'react-redux';

// // const store = createStore(contactReducer, composeWithDevTools());

// // const root = createRoot(document.querySelector('#root'));

// root.render(
//     <Provider store={store}>
//         <Router>
//             <App />
//         </Router>
//     </Provider>
// );