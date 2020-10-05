import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Orders from "./components/Orders";
import CartContext from "./CartContext";
import CartBox from "./components/CartBox";
import {BrowserRouter, Route} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <CartContext>
        <BrowserRouter>
          <div ref={'node'} className="App">
            <Header/>
            <CartBox/>
            <Route path='/' component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/orders" component={Orders}/>
          </div>
        </BrowserRouter>
      </CartContext>
      
    );
  }
}

export default App;
