export default function AmountInput(props: any) {
  const { setAmount } = props;

  return (
    <div className="flex items-center justify-center">
      <div className="flex border-2 rounded w-25">
        <input
          type="number"
          min={1}
          max={1000}
          step={1}
          className="px-4 py-2 w-full rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Amount"
          onChange={(e) => {
            setAmount(+e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
