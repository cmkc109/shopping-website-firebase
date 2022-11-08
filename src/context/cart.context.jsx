import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider =({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect( () => {
        const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        setCartTotal(newCartTotal);
      }, [cartItems]);
    
      //add item to cart
    const addItemToCart = (productToAdd) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
        if (existingItem) {
            let newCartItems = cartItems.map(cartItem => 
                                cartItem.id === productToAdd.id 
                                ? {...cartItem, quantity: cartItem.quantity + 1} 
                                : cartItem
                                )
            setCartItems(newCartItems)
        } else {
            setCartItems([...cartItems, {...productToAdd, quantity: 1}])
        }
    }

    //remove item from cart
    const removeItemFromCart = (productToRemove) => {
        const itemToRemove = cartItems.find(
            (cartItem) => cartItem.id === productToRemove.id
          );

        if (itemToRemove.quantity === 1) {
            let newList =  cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
            setCartItems(newList)
        } else {
            let newList = cartItems.map((cartItem) => cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
            );
            setCartItems(newList)
        }
    }

   const clearAllItemsFromCart = (productToRemove) => {
       let newList = cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
       setCartItems(newList) 
    }

    const value = { cartTotal, 
                    cartCount, 
                    isCartOpen, 
                    setIsCartOpen, 
                    cartItems, 
                    addItemToCart,
                    removeItemFromCart,
                    clearAllItemsFromCart};

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}