import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import { ItemModel, selectStuff } from "../features/slice";
import ReceiptItem from "./receipt-item";

export default function Receipt() {
  const stuff = useAppSelector(selectStuff);

  const headings = useMemo(() => ["", " ", "  "], []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-center m-2">Your Receipt</h1>
      <div className="flex flex-col items-center m-2">
        <table className="w-96">
          <thead>
            <tr>
              {stuff.receipt.length !== 0 &&
                headings.map((heading) => (
                  <th
                    key={heading}
                    className="px-2 py-2 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"
                  >
                    {heading}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {stuff.receipt.map((receiptItem: ItemModel, i: any) => {
              return receiptItem.amount > 0 ? (
                <ReceiptItem receiptItem={receiptItem} key={i} />
              ) : null;
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="w-4/12 px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-lg leading-10">TOTAL</div>
              </td>
              <td className="w-4/12 px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-lg leading-10">{}</div>
              </td>
              <td className="w-4/12 px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-lg leading-10 text-right">
                  {`$${stuff.totalPrice}`}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
