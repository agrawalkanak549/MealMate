import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Clock3,
  MapPin,
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  Leaf,
} from "lucide-react";

const restaurant = {
  id: 1,
  name: "The Italian Oven",
  rating: 4.8,
  delivery: "25-30 min",
  location: "Jagatpura, Jaipur",
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
};

const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 299,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    price: 399,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "White Sauce Pasta",
    price: 279,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Garlic Bread",
    price: 179,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    price: 149,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
  },
];

export default function RestaurantDetails() {
  const { id } = useParams();

  const [cart, setCart] = useState({});

  const increase = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const decrease = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-slate-100 pb-28">
      {/* Hero */}

      <div className="relative h-[350px] overflow-hidden">
        <img
          src={restaurant.image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <Link
          to="/customer/dashboard"
          className="absolute top-6 left-6 bg-white p-3 rounded-full"
        >
          <ArrowLeft size={20} />
        </Link>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-8 left-8 text-white"
        >
          <h1 className="text-4xl font-bold">
            {restaurant.name}
          </h1>

          <div className="flex gap-5 mt-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
              {restaurant.rating}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              {restaurant.delivery}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {restaurant.location}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Menu */}

      <div className="max-w-6xl mx-auto px-5 mt-10">
        <h2 className="text-3xl font-bold mb-8">
          Recommended Menu
        </h2>

        <div className="space-y-6">
          {menu.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={item.image}
                alt=""
                className="md:w-64 h-60 object-cover"
              />

              <div className="flex-1 p-7 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <Leaf
                      size={18}
                      className="text-green-600"
                    />

                    <span className="text-green-600 font-semibold">
                      Veg
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.name}
                  </h3>

                  <p className="text-orange-600 text-xl font-bold mt-4">
                    ₹{item.price}
                  </p>
                </div>

                {cart[item.id] ? (
                  <div className="flex items-center gap-4 bg-orange-500 text-white rounded-xl px-4 py-2">
                    <button onClick={() => decrease(item.id)}>
                      <Minus size={18} />
                    </button>

                    <span>{cart[item.id]}</span>

                    <button onClick={() => increase(item.id)}>
                      <Plus size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => increase(item.id)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold"
                  >
                    Add
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {totalItems > 0 && (
        <motion.div
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[700px]"
        >
          <Link to="/customer/cart">
            <div className="bg-orange-500 rounded-2xl px-6 py-5 text-white flex justify-between items-center shadow-2xl">
              <div>
                <h3 className="font-bold text-lg">
                  {totalItems} Item{totalItems > 1 ? "s" : ""} Added
                </h3>

                <p className="text-orange-100">
                  Ready to Checkout
                </p>
              </div>

              <div className="flex items-center gap-2 font-semibold">
                <ShoppingCart size={20} />
                View Cart
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </div>
  );
}