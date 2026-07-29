import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) {
  const styles = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white shadow-lg",
    secondary:
      "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`w-full rounded-2xl py-4 font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;