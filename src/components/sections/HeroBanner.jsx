import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 mt-8"
    >
      <div className="grid lg:grid-cols-2 items-center">

        <div className="p-12 text-white">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm">
            🔥 Today's Special Offer
          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">
            40% OFF
          </h1>

          <p className="mt-5 text-lg text-orange-100 max-w-lg">
            Get your favourite meals delivered within 25 minutes.
            Fresh ingredients. Fast delivery. Amazing taste.
          </p>

          <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-bold text-orange-600 flex items-center gap-3 hover:scale-105 transition">

            Order Now

            <ArrowRight />

          </button>

        </div>

        <div className="hidden lg:flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
            className="h-[420px] object-cover"
          />

        </div>

      </div>
    </motion.section>
  );
}

export default HeroBanner;