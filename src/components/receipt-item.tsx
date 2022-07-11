export default function ReceiptItem(props: any) {
  const { receiptItem } = props;

  return (
    <tr className="w-full">
      <td className="w-4/12 px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-500">
          {receiptItem.name}
        </div>
      </td>
      <td className="w-4/12 px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-500 text-right">
          {receiptItem.amount}
        </div>
      </td>
      <td className="w-4/12 px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
        <div className="text-sm leading-5 text-gray-500">
          {receiptItem.price}
        </div>
      </td>
    </tr>
  );
}
