import "./App.css";
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Component } from "react";

class App extends Component{
  render(){
    return (
      <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
      </BrowserRouter>
      );
  }
 
}

export default App;
