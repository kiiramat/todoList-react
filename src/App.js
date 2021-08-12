// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. :D
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import './App.css';

import Checkbox from "./components/Checkbox";

function App() {
  return(
    <div className="todo-list">
      <div className="tasks-list-container">
        <div className="tasks-list">
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </div>
      </div>
    </div>    
  )
}

export default App;