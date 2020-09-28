import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import {BrowserRouter, Route} from "react-router-dom";
import Bounce from "react-reveal/Bounce";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
