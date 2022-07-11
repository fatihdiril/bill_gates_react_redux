import { useAppSelector } from "./app/hooks";
import { ItemModel, selectStuff } from "./features/slice";
import ItemCard from "./components/item-card";
import Receipt from "./components/receipt";

function App() {
  const stuff = useAppSelector(selectStuff);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center m-4">Spend Bill Gates' Money</h1>
      <h2 className="text-2xl text-center m-4">{`$${stuff.balance}`}</h2>
      <div className="grid grid-cols-4 mt-12">
        {stuff.items.map((item: ItemModel, i: any) => {
          return <ItemCard item={item} key={i} />;
        })}
      </div>
      <div className="mt-4">
        {stuff.receipt.length > 0 ? <Receipt /> : null}
      </div>
    </div>
  );
}

export default App;
