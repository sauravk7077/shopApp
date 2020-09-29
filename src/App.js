import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path='/' component={Home} exact/>
          <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
