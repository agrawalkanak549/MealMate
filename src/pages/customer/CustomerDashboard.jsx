import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Star,
  Clock3,
  ShoppingBag,
  ArrowRight,
  Pizza,
  Soup,
  Sandwich,
  IceCream2,
  Beef,
  Coffee,
  Flame,
  Percent,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Pizza",
    icon: Pizza,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    name: "Burger",
    icon: Sandwich,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    name: "Indian",
    icon: Soup,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    name: "Desserts",
    icon: IceCream2,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 5,
    name: "BBQ",
    icon: Beef,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 6,
    name: "Cafe",
    icon: Coffee,
    color: "bg-blue-100 text-blue-600",
  },
];

const restaurants = [
  {
    id: 1,
    name: "The Italian Oven",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    time: "25-30 min",
    discount: "40% OFF",
    cuisine: "Pizza • Pasta • Italian",
  },
  {
    id: 2,
    name: "Burger Hub",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    time: "20-25 min",
    discount: "30% OFF",
    cuisine: "Burger • Fries • Drinks",
  },
  {
    id: 3,
    name: "Royal Biryani",
    image:
      "https://images.unsplash.com/photo-1701579231346-5f5f76e95d85?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    time: "35 min",
    discount: "Flat ₹150 OFF",
    cuisine: "Biryani • North Indian",
  },
  {
    id: 4,
    name: "Healthy Bowl",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    time: "18 min",
    discount: "20% OFF",
    cuisine: "Healthy • Salad • Juice",
  },
];

const offers = [
  {
    title: "FREE Delivery",
    subtitle: "On Orders Above ₹299",
    icon: ShoppingBag,
    bg: "from-orange-500 to-red-500",
  },
  {
    title: "50% OFF",
    subtitle: "Your First Order",
    icon: Percent,
    bg: "from-purple-500 to-pink-500",
  },
];

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Hero */}

      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-b-[40px] px-6 py-8 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Delivering To</p>

              <div className="flex items-center gap-2 mt-1">
                <MapPin size={18} />
                <h2 className="font-semibold text-lg">
                  Jagatpura, Jaipur
                </h2>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mt-8 leading-tight">
            Delicious Food,
            <br />
            Delivered Fast 🍔
          </h1>

          <div className="bg-white rounded-2xl mt-8 flex items-center px-4 py-4 text-gray-600 shadow-lg">
            <Search size={20} />

            <input
              className="ml-3 w-full outline-none"
              placeholder="Search restaurants or food..."
            />
          </div>
        </motion.div>
      </section>

      {/* Offers */}

      <section className="px-6 mt-8">
        <div className="grid md:grid-cols-2 gap-5">
          {offers.map((offer, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={index}
              className={`bg-gradient-to-r ${offer.bg} rounded-3xl text-white p-6 shadow-lg`}
            >
              <offer.icon size={34} />

              <h2 className="font-bold text-2xl mt-4">
                {offer.title}
              </h2>

              <p className="opacity-90">{offer.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}

      <section className="px-6 mt-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold text-2xl">Categories</h2>

          <button className="text-orange-600 font-semibold">
            View All
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
          {categories.map((item) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-md text-center cursor-pointer"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <item.icon />
              </div>

              <p className="mt-3 font-medium">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending */}

      <section className="px-6 mt-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl flex items-center gap-2">
              <Flame className="text-orange-500" />
              Trending Restaurants
            </h2>
          </div>

          <button className="text-orange-600 font-semibold flex items-center gap-1">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          {restaurants.map((restaurant) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={restaurant.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-64 object-cover"
                />

                <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
                  {restaurant.discount}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-2xl">
                      {restaurant.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {restaurant.cuisine}
                    </p>
                  </div>

                  <div className="bg-green-100 px-3 py-2 rounded-xl flex items-center h-fit">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="ml-1 font-semibold">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 mt-5">
                  <Clock3 size={18} />
                  {restaurant.time}
                </div>

                <Link
                  to={`/customer/restaurant/${restaurant.id}`}
                  className="block mt-6"
                >
                  <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold">
                    View Menu
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}