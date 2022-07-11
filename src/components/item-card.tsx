import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectStuff, buyItem, sellItem } from "../features/slice";
import AmountInput from "./amount-input";

export default function ItemCard(props: any) {
  const stuff = useAppSelector(selectStuff);
  const dispatch = useAppDispatch();
  const { item } = props;
  const [amount, setAmount] = useState(0);

  function buy() {
    if (+amount === 0 || amount === null || amount === undefined) {
      return;
    }
    // Check if balance is ok
    if (stuff.balance >= stuff.items[item.id].price * amount) {
      dispatch(buyItem({ id: item.id, amount: amount }));
    } else {
      console.log("nope");
    }
  }

  function sell() {
    if (+amount === 0 || amount === null || amount === undefined) {
      return;
    }
    // Check if there are enough items to sell
    if (stuff.items[item.id].amount >= amount) {
      dispatch(sellItem({ id: item.id, amount: amount }));
    } else {
      console.log("nope");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <img
        className="m-auto"
        src={`/images/${item.id}.jpg`}
        alt={item.name}
        width={300}
        height={300}
      />
      <h1 className="text-2xl text-center m-2">{item.name}</h1>
      <h1 className="text-2xl text-center m-2">{`$${item.price}`}</h1>
      <div className="flex flex-row items-center m-2">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-4 text-center"
          onClick={sell}
        >
          SELL
        </button>
        <AmountInput item={item} amount={amount} setAmount={setAmount} />
        <button
          type="button"
          className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mx-4 text-center"
          onClick={buy}
        >
          BUY
        </button>
      </div>
    </div>
  );
}
