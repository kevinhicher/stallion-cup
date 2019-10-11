import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import  { FirebaseContext } from './components/Firebase';
import Routes from './Routes';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <FirebaseContext.Consumer>
//         {firebase => {
//           console.log(firebase);
//           return <div>I've access to Firebase and render something.</div>;
//         }}
//       </FirebaseContext.Consumer>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    );
  }
}

export default App;
