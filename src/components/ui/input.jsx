export default function Input({ placeholder, label }) {
  return (
    <div className=" grid gap-1">
      <label htmlFor={label} className="text-sm mr-2 font-semibold">{label}</label>
      <input
        name={label}
        id={label}
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl
         text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}
