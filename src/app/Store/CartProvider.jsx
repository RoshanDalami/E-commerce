'use client'

import React, { useReducer, useEffect } from "react";
import CartContext from "./Cart-context";

// Default state of the cart
var defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Reducer function for managing cart state and actions
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "ORDER") {
    return {
      items: [],
      totalAmount: 0,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const isClient = typeof window !== "undefined";
  let storedCartData = defaultCartState;
  // Load cart items and total amount from localStorage on component initialization
  if(!isClient){

    const storedCartDataJSON = localStorage.getItem("cartData");
     storedCartData = storedCartDataJSON
      ? JSON.parse(storedCartDataJSON)
      : defaultCartState;
  }

  // Initialize the cart state with the data from localStorage
  const [curState, dispatchCartAction] = useReducer(
    cartReducer,
    storedCartData
  );

  // Update localStorage whenever the cart state changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cartData", JSON.stringify(curState));}
  }, [curState]);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const onOrderHandler = () => {
    dispatchCartAction({ type: "ORDER" });
  };

  const cartContext = {
    items: curState.items,
    totalAmount: curState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    order: onOrderHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
