import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface ItemModel {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export interface StateModel {
  items: ItemModel[];
  balance: number;
  receipt: ItemModel[];
  totalPrice: number;
}

const initialState: StateModel = {
  balance: 100000000000,
  items: [
    { id: 0, name: "Mansion", price: 90000000, amount: 0 },
    { id: 1, name: "A Toy Car", price: 999999999, amount: 0 },
    { id: 2, name: "A Hotdog", price: 2, amount: 0 },
    { id: 3, name: "A Pencil", price: 500, amount: 0 },
  ],
  receipt: [],
  totalPrice: 0,
};

export const theSlice = createSlice({
  name: "theSlice",
  initialState,
  reducers: {
    increaseBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    decreaseBalance: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
    buyItem: (state, action: PayloadAction<{ id: number; amount: number }>) => {
      let tempItem: ItemModel = JSON.parse(
        JSON.stringify(state.items[action.payload.id])
      );

      state.items[action.payload.id].amount += action.payload.amount;
      state.balance -=
        action.payload.amount * state.items[action.payload.id].price;

      tempItem.amount += action.payload.amount;
      tempItem.price = tempItem.price * tempItem.amount;
      state.receipt = state.receipt.filter(
        (item) => item.id !== action.payload.id
      );
      state.receipt.push(tempItem);
      state.totalPrice +=
        state.items[action.payload.id].price * action.payload.amount;
    },
    sellItem: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      let tempItem: ItemModel = JSON.parse(
        JSON.stringify(state.items[action.payload.id])
      );

      state.items[action.payload.id].amount -= action.payload.amount;
      state.balance +=
        action.payload.amount * state.items[action.payload.id].price;

      tempItem.amount -= action.payload.amount;
      tempItem.price = tempItem.price * tempItem.amount;
      state.receipt = state.receipt.filter(
        (item) => item.id !== action.payload.id
      );
      state.receipt.push(tempItem);
      state.totalPrice -=
        state.items[action.payload.id].price * action.payload.amount;
    },
  },
});

export const { increaseBalance, decreaseBalance, buyItem, sellItem } =
  theSlice.actions;

export const selectStuff = (state: RootState) => state.state;

export default theSlice.reducer;
