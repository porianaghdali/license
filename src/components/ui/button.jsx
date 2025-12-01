export default function Button({ text, icon, color, Function }) {
  return (
    <button onClick={Function}style={{background:color}}
      className={`
    w-full h-12 overflow-hidden rounded-xl  shadow-2xl text-white font-medium
    relative flex items-center justify-center 
    group transition-transform hover:scale-105
  `}
    >
      {/* لایه متن */}
      <span
        className="
      absolute transition-all duration-300 
      transform group-hover:-translate-y-10
    "
      >
        {text}
      </span>

      {/* لایه آیکون */}
      <span
        className="
      absolute transition-all duration-300 
      translate-y-10 group-hover:translate-y-0
    "
      >
        {icon}
      </span>
    </button>
  );
}
