import { NextPage } from "next";

interface InputProps {
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input: NextPage<InputProps> = ({ label, inputProps = {} }) => {
  return (
    <div>
      <label
        htmlFor={inputProps.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...inputProps}
          className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
