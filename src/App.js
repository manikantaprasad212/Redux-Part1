import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import "./App.css";

function App() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store) => {
    return store;
  });
  return (
    <div className="App">
      <input ref={inputRef} required placeholder="Prasad Bhai  🌹"></input>
      <button
        onClick={() => {
          dispatch({ type: "addFruits", data: inputRef.current.value });
        }}
      >
        Fruits
      </button>
      <button
        onClick={() => {
          dispatch({ type: "addVegetables", data: inputRef.current.value });
        }}
      >
        Vegetables
      </button>
      <button
        onClick={() => {
          dispatch({ type: "addCurries", data: inputRef.current.value });
        }}
      >
        Curries
      </button>

      <br></br>
      <h2>Fruits🥝:{storeObj ? storeObj.fruits.join() : null}</h2>
      <h3>Vegetables <img className="img" src="https://c8.alamy.com/comp/2G7M487/broccoli-vegetable-cartoon-character-emoji-mascot-2G7M487.jpg"></img>:{storeObj ? storeObj.vegetables.join() : null}</h3>
      <h4>Curries <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHEI-R_QuGWfk8vc04ruXcj6W07-sHzuRIQ&s"></img>:{storeObj ? storeObj.curries.join() : null}</h4>
    </div>
  );
}

export default App;


// import './App.css';
// import { useRef } from 'react'
// import { useDispatch } from 'react-redux';
// function App() {
//   let inputRef = useRef();
//   let dispatch = useDispatch();
//   return (
//     <div className="App">
// <h1>abc</h1>
// <input ref={inputRef}></input>
// <button type='button' onClick={()=>{
// dispatch({type:"addFruits",data:inputRef.current.value});
// }}>fruits</button>
//     </div>
//   );
// }

// export default App;
