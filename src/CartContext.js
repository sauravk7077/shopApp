import React, {createContext} from "react";

export const CartContext = createContext();

class CartContextProvider extends React.Component{
    state= {
        cart: [],
        show: false
    }

    findItem = (arr,id)=> {
        return arr.find(e=> e.id === id);
    }

    updateCount = (id,increment) => {
        const cartItems = this.state.cart;
        if(this.findItem(cartItems, id).count == 1 && increment < 0)
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
            });
        }
            
    }

    addToCart = ob=>{
        if (this.state.cart.some((el) => el.id === ob.id)) {
            this.updateCount(ob.id, 1);
          } else {
            ob = { ...ob, count: 1 };
            const cartNew = [...this.state.cart, ob];
            this.setState({
              cart: cartNew
            });
          }
    }

    removeFromCart = id=>{
        const cartItems = this.state.cart.filter(el=> el.id !== id);
        this.setState({
            cart: cartItems
        });
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
            findItem: this.findItem
        }
        return (
            <CartContext.Provider value={contextObject}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;

