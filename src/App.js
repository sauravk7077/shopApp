import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import CartContext from "./CartContext";
import CartBox from "./components/CartBox";
import {BrowserRouter, Route} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <CartContext>
        <BrowserRouter>
          <div className="App">
            <Header/>
            <CartBox/>
            <Route path='/' component={Home} exact/>
            <Route path="/about" component={About}/>
          </div>
        </BrowserRouter>
      </CartContext>
      
    );
  }
}

export default App;
