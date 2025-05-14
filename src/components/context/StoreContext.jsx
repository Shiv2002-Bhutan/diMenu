import { createContext, useEffect, useState } from "react";
import axios from "axios"; 
// import { food_list } from "../../assets/assets";

const url = "http://localhost:4000";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);

const addToCart = (itemId) => {
setCartItems((prev) => ({
...prev,
[itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
}));

};


const removeFromCart = (itemId) => {
setCartItems((prev) => ({
...prev,
[itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
}));
};


  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      setFoodList(res.data.data);
    } catch (error) {
      console.error("Failed to fetch food list:", error);
    }
  };
    
  // const loadCartData = async () => {
  //   try {
  //     const res = await axios.post(`${url}/api/cart/get`);
  //     if (res.data && res.data.cartItems) {
  //       setCartItems(res.data.cartItems);
  //     }
  //   } catch (error) {
  //     console.error("Failed to load cart data:", error);
  //   }
  // };

  useEffect(() => {
    fetchFoodList();
    // loadCartData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,url
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
