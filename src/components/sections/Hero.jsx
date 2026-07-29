import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF8F2] pt-36">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-200/40 blur-3xl"></div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-flex items-center rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-orange-600 shadow">
            🚀 India's Smart Food Ecosystem
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900 lg:text-7xl">
            One Platform.
            <br />
            Every Meal.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-500">
            MealMate connects customers, restaurants, delivery partners and NGOs
            into one intelligent ecosystem. Order food, reserve tables,
            discover healthy meals and donate surplus food — all from one place.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-orange-600">

              Explore MealMate

              <ArrowRight size={20} />

            </button>

            <button className="flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">

              <Play size={18} />

              Watch Demo

            </button>

          </div>

          <div className="mt-16 flex flex-wrap gap-12">

            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                20K+
              </h2>

              <p className="mt-2 text-slate-500">
                Happy Customers
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                1200+
              </h2>

              <p className="mt-2 text-slate-500">
                Restaurants
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                4.9★
              </h2>

              <p className="mt-2 text-slate-500">
                Average Rating
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex justify-center"
        >

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="MealMate"
            className="w-[620px] rounded-[40px] object-cover shadow-2xl"
          />

          {/* Rating Card */}

          <div className="absolute top-8 -right-8 rounded-3xl border border-white/30 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">

            <p className="text-sm text-slate-500">
              Customer Rating
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              ⭐ 4.9
            </h3>

            <p className="mt-2 text-slate-500">
              Trusted by 20,000+ users
            </p>

          </div>

          {/* Delivery Card */}

          <div className="absolute bottom-8 -left-8 rounded-3xl border border-white/30 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">

            <p className="text-sm text-slate-500">
              Average Delivery
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              25 min
            </h3>

            <p className="mt-2 text-green-600 font-semibold">
              Live Tracking Available
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;