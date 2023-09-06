"use client";

import React, { useReducer, useEffect } from "react";
import CartContext from "./Cart-context";
import axios from "axios";


interface CartItem {
  // Define the structure of a cart item here
  id: string;
  name: string;
  price: number;
  amount: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}
declare global {
  interface Window {
    localStorage: Storage;
  }
}


//default state of the cart
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//Reducer function for managing cart that have state and action

const cartReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.item.id
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
      (item: any) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item: any) => item.id !== action.id);
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

const CartProvider = (props: any) => {
  const storedCartItemsJSON = localStorage.getItem('cartItems');
  const storedCartItems: CartItem[] = storedCartItemsJSON
    ? JSON.parse(storedCartItemsJSON)
    : [];

  const [curState, dispatchCartAction] = useReducer(cartReducer, {
    items: storedCartItems,
    totalAmount: 0,
  });

  // Update localStorage whenever the cart items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(curState.items));
  }, [curState.items]);

  // const [curState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

  const addItemToCartHandler = (item: any) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id: any) => {
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
