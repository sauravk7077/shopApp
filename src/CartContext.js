import React, {createContext} from "react";
import lS from "./lS";

export const CartContext = createContext();

const lStorage = new lS();

class CartContextProvider extends React.Component{
    constructor() {
        super();
        this.state= {
            cart: lStorage.get()?lStorage.get(): [],
            show: false
        }
        if(!lStorage.get())
            lStorage.set(this.state.cart);
        else
            this.setState({cart: lStorage.get()})
    }

    findItem = (arr,id)=> {
        return arr.find(e=> e.id === id);
    }

    updateCount = (id,increment) => {
        const cartItems = this.state.cart;
        if(this.findItem(cartItems, id).count === 1 && increment < 0)
        {
            this.removeFromCart(id);
        }
        else{
            this.setState({
                cart: cartItems.map(item=>(
                    item.id === id ? {
                        ...item,
                        count: item.count + increment
                    }: item
                ))
            }, this.updateLocalStorage);
        }
            
    }

    updateLocalStorage = ()=> {
        lStorage.set(this.state.cart);
    }

    addToCart = ob=>{
        if (this.state.cart.some((el) => el.id === ob.id)) {
            this.updateCount(ob.id, 1);
          } else {
            ob = { ...ob, count: 1 };
            const cartNew = [...this.state.cart, ob];
            this.setState({
              cart: cartNew
            }, this.updateLocalStorage);
          }

    }
    clearCart = _=>{
        this.setState({cart: []});
        this.updateLocalStorage();
    }

    removeFromCart = id=>{
        const cartItems = this.state.cart.filter(el=> el.id !== id);
        this.setState({
            cart: cartItems
        });
        this.updateLocalStorage();
    }

    toggleShow = _=>{
        this.setState(s=>({show: !s.show}))
    }
    render() {
        const contextObject = {
            ...this.state,
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            toggleShow: this.toggleShow,
            updateCount: this.updateCount,
            findItem: this.findItem,
            clearCart: this.clearCart
        }
        return (
            <CartContext.Provider value={contextObject}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;

