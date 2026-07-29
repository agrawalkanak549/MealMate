import { motion } from "framer-motion";

function RoleCard({
  icon,
  title,
  subtitle,
  features,
  button,
  gradient,
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl overflow-hidden shadow-xl bg-white"
    >
      <div
        className={`h-2 bg-gradient-to-r ${gradient}`}
      ></div>

      <div className="p-8">

        <div className="text-6xl mb-5">
          {icon}
        </div>

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          {subtitle}
        </p>

        <div className="mt-6 space-y-2">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <span className="text-green-500">
                ✔
              </span>

              <span>{item}</span>

            </div>
          ))}

        </div>

        <button
          className="
          mt-8
          bg-orange-500
          hover:bg-orange-600
          transition
          text-white
          rounded-full
          px-7
          py-3
          font-semibold
          "
        >
          {button} →
        </button>

      </div>

    </motion.div>
  );
}

export default RoleCard;