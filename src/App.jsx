//import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <div>
      <Router>   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
