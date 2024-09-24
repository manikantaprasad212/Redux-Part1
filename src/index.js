import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let groceries = {
  fruits:[],
  vegetables:[],
  curries:[],
}

let reducer = (latestGroceries = groceries,dispacthedObj)=>{
console.log("Inside reducer Function");
console.log(dispacthedObj);

if(dispacthedObj.type === "addFruits"){
return {...latestGroceries,fruits:latestGroceries.fruits.concat([dispacthedObj.data])};
}else if(dispacthedObj.type === "addVegetables"){
  return {...latestGroceries,vegetables:latestGroceries.vegetables.concat([dispacthedObj.data])};
}else if(dispacthedObj.type === "addCurries"){
  return {...latestGroceries,curries:latestGroceries.curries.concat([dispacthedObj.data])};
}
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// let store = {
//   fruits:[],
//   vegetables:[],
//   curries:[]
// }

// let reducer = (latestStore = store,dispatchedObj)=>{
//   console.log("Inside reducer function");
//   console.log(dispatchedObj);
// return latestStore;
// }

// let Store = createStore(reducer);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider Store={Store} >
//     <App />
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
