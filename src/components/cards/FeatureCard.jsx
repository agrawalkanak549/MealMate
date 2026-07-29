import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
      group
      relative
      overflow-hidden
      rounded-[32px]
      bg-white
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      border
      border-orange-100

      ${
        feature.size === "large"
          ? "lg:col-span-2 lg:row-span-2 p-10 min-h-[350px]"
          : "p-8 min-h-[220px]"
      }
    `}
    >
      {/* Gradient Background */}
      <div
        className={`
          absolute
          -right-12
          -top-12
          h-48
          w-48
          rounded-full
          bg-gradient-to-br
          ${feature.color}
          opacity-10
          group-hover:scale-125
          transition
          duration-500
        `}
      />

      {/* Icon */}
      <div
        className={`
          h-16
          w-16
          rounded-2xl
          bg-gradient-to-br
          ${feature.color}
          flex
          items-center
          justify-center
          text-white
          shadow-lg
        `}
      >
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-lg leading-8 text-slate-500">
        {feature.description}
      </p>

      {/* Arrow */}
      <motion.div
        whileHover={{
          x: 6,
        }}
        className="absolute bottom-8 right-8"
      >
        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            ${feature.color}
            text-white
            shadow-md
          `}
        >
          <ArrowUpRight size={22} />
        </div>
      </motion.div>

      {/* Large Card Decoration */}
      {feature.size === "large" && (
        <div className="absolute bottom-0 right-0 translate-x-8 translate-y-8 opacity-10">
          <Icon size={170} />
        </div>
      )}
    </motion.div>
  );
}

export default FeatureCard;