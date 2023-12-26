import './App.css';
import Login from './components/Login';
import Home from './components/Home';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    // <div className="App">
    //     <Login />
    // </div>

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
