import React, {createContext} from "react";

export const CartContext = createContext();

class CartContextProvider extends React.Component{
    state= {
        cart: [],
        show: false
    }

    addToCart = ob=>{
        const cartNew = [...this.state.cart , ob];
        this.setState({
            cart: cartNew
        });
    }

    toggleShow = _=>{
        this.setState(s=>({show: !s.show}))
    }
    render() {
        return (
            <CartContext.Provider value={{...this.state, addToCart: this.addToCart, toggleShow: this.toggleShow}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;