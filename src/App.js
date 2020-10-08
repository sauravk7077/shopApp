import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Orders from "./components/Orders";
import AlertContext from "./AlertContext";
import CartContext from "./CartContext";
import CartBox from "./components/CartBox";
import {BrowserRouter, Route} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <CartContext>
        <AlertContext>
          <BrowserRouter>
            <div ref={'node'} className="App">
              <Header/>
              <CartBox/>
              <Route path='/shopApp/' component={Home} exact/>
              <Route path="/shopApp/about" component={About}/>
              <Route path="/shopApp/orders" component={Orders}/>
            </div>
          </BrowserRouter>
        </AlertContext>
      </CartContext>
      
    );
  }
}

export default App;
