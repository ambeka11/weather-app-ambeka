import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CurrentWeather from "./pages/CurrentWeather";

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Routes>
        <Route path="/" element={<CurrentWeather />} />
        <Route path="/current-weather" element={<CurrentWeather />} />
        <Route path="/forecast" element={<>Hi</>} />
      </Routes>
    </div>
  );
}

export default App;








// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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

// export default App;
