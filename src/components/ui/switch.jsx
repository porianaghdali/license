import { useState } from "react";

export default function Switch({ label, onChange }) {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onChange) onChange(newState);
  };

  return (
    <div className="flex items-center gap-3 ">
      <button
        onClick={toggle}
        className={`
         hover:scale-105  relative inline-flex h-6 w-11 items-center rounded-full transition 
          ${enabled ? "bg-blue-600" : "bg-gray-300"}
        `}
      >
        <span
          className={`
            inline-block h-5 w-5 transform rounded-full bg-white transition 
            ${enabled ? "-translate-x-5.5" : "-translate-x-0.5"}
          `}
        ></span>
      </button>

      {label && <span className="select-none text-gray-800">{label}</span>}
    </div>
  );
}
