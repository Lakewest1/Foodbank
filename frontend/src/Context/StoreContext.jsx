import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

  {/*Creating Add to cart for each products */ }
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 })); {/* Check if product is not in cart,Then add the product */ }
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); {/*If the product is already in the cart plus 1 +1*/ }
    }
    
  }
  {/*Creating for Remove from cart */ }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }



    {/*Creating for Total and sub total price */ }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems)
    {
        if (cartItems[item] > 0) {
      let itemInfo = food_list.find((product) => product._id === item)
      totalAmount += itemInfo.price * cartItems[item];
      }
     
    } 
    return totalAmount;
  }
 
  

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
      </StoreContext.Provider>
  )

}
export default StoreContextProvider