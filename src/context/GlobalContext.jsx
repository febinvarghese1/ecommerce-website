import { createContext, useState } from "react";

export const GlobalState = createContext(null);

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const [filterPrice, setFilterPrice] = useState(1000);
  const [order, setOrder] = useState("");
  const [range, setRange] = useState(200);

  //this function is used to add the cart items from overall pages

  const addToCartItem = (product) => {
    let isFound = false;
    if (cartItems === []) {
      //adding the quantity to the previous cartitems if it is not there
      setCartItems([{ ...product, quantity: 1 }]);
      return;
    }

    cartItems.forEach((filterproduct) => {
      if (product.id === filterproduct.id) {
        isFound = true;
        //now the product is there in the list so
        //just update the quantity
        filterproduct.quantity += 1;
        setCartItems([...cartItems]);
      }
    });

    //if it didn't found then spread the previous values and add the
    //quantity to it
    if (!isFound) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //this function is used to delete the cart items from the single cart
  const deleteItemFromCart = (product) => {
    const filtered = cartItems.filter((item) => {
      return item.id !== product.id;
    });

    setCartItems(filtered);
  };

  const contextValue = {
    addToCartItem,
    deleteItemFromCart,
    cartItems,
    category,
    setCategory,
    filterPrice,
    order,
    setOrder,
    range,
    setRange,
    setFilterPrice,
  };

  return (
    <GlobalState.Provider value={contextValue}>{children}</GlobalState.Provider>
  );
};
