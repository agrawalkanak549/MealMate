import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Tag,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 299,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "White Sauce Pasta",
      price: 279,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 49;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + gst;

  return (
    <div className="min-h-screen bg-slate-100 pb-40">
      {/* Header */}

      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center gap-4">
          <Link
            to="/customer/dashboard"
            className="p-2 rounded-full bg-slate-100"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold">
              Your Cart
            </h1>

            <p className="text-gray-500">
              Review your selected meals
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 mt-8 grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}

        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <motion.div
              layout
              whileHover={{ y: -3 }}
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={item.image}
                alt={item.name}
                className="md:w-56 h-52 object-cover"
              />

              <div className="flex-1 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-orange-600 text-xl font-bold mt-3">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-2 mt-5 text-red-500"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>
                </div>

                <div className="flex items-center bg-orange-500 text-white rounded-xl px-4 py-2 gap-5">
                  <button
                    onClick={() => decreaseQty(item.id)}
                  >
                    <Minus size={18} />
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {cartItems.length === 0 && (
            <div className="bg-white rounded-3xl p-14 text-center shadow-lg">
              <ShoppingBag
                size={60}
                className="mx-auto text-orange-500"
              />

              <h2 className="text-3xl font-bold mt-5">
                Your Cart is Empty
              </h2>

              <p className="text-gray-500 mt-2">
                Looks like you haven't added anything yet.
              </p>

              <Link to="/customer/dashboard">
                <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold">
                  Browse Restaurants
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Summary */}

        <div className="bg-white rounded-3xl shadow-xl p-7 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">
            Bill Summary
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>

              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>

              <span>₹{deliveryFee}</span>
            </div>

            <div className="flex justify-between">
              <span>GST</span>

              <span>₹{gst}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span className="text-orange-600">
                ₹{total}
              </span>
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl mt-8 p-5 flex items-center gap-4">
            <Tag className="text-orange-500" />

            <div>
              <h3 className="font-semibold">
                Apply Coupon
              </h3>

              <p className="text-sm text-gray-500">
                Save more on your order
              </p>
            </div>
          </div>

          <Link to="/customer/checkout">
            <button
              disabled={cartItems.length === 0}
              className="w-full mt-8 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 transition text-white py-4 rounded-2xl font-semibold flex justify-center items-center gap-3"
            >
              <CreditCard size={20} />
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}