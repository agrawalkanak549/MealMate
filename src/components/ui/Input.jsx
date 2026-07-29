function Input({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex items-center rounded-2xl border border-gray-300 bg-white px-4 py-4 transition-all focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">

      {icon && <span className="text-orange-500">{icon}</span>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="ml-3 w-full bg-transparent outline-none"
      />

    </div>
  );
}

export default Input;