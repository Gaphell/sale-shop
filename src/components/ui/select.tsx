interface SelectProps {
  name: string;
  options?: Array<string | number>;
}

const Select = (props: SelectProps) => {
  const { name, options = [] } = props;

  return (
    <select
      name={name}
      className="block w-full px-3 py-2 mr-2 border border-gray-300 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700 text-sm sm:px-4 sm:py-2"
    >
      {options.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default Select;
