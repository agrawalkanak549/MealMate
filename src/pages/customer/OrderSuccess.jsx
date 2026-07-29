import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Home,
  Receipt,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function OrderSuccess() {
  const order = {
    id: "MM845296",
    restaurant: "The Italian Oven",
    amount: 970,
    deliveryTime: "25 - 30 Minutes",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-5 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-[32px] shadow-2xl max-w-2xl w-full p-10 text-center"
      >
        {/* Success Icon */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 180,
          }}
          className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle2
            size={70}
            className="text-green-600"
          />
        </motion.div>

        <h1 className="text-4xl font-bold mt-8">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Your delicious meal is now being prepared.
          We'll notify you once your delivery partner
          picks up your order.
        </p>

        {/* Order Details */}

        <div className="mt-10 bg-slate-50 rounded-3xl p-7 text-left space-y-5">
          <div className="flex justify-between">
            <span className="text-gray-500">
              Order ID
            </span>

            <span className="font-bold">
              #{order.id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Restaurant
            </span>

            <span className="font-semibold">
              {order.restaurant}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Amount Paid
            </span>

            <span className="font-bold text-orange-600">
              ₹{order.amount}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Estimated Delivery
            </span>

            <span className="font-semibold">
              {order.deliveryTime}
            </span>
          </div>
        </div>

        {/* Delivery Status */}

        <div className="mt-10 bg-orange-50 rounded-3xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
              <Truck
                className="text-white"
                size={26}
              />
            </div>

            <div className="text-left">
              <h3 className="font-bold text-lg">
                Preparing Your Order
              </h3>

              <p className="text-gray-500">
                Restaurant has started cooking.
              </p>
            </div>
          </div>

          <Link to="/customer/track-order">
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              Track
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Actions */}

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <Link to="/customer/orders">
            <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition py-4 rounded-2xl font-semibold flex items-center justify-center gap-3">
              <Receipt size={20} />
              View Orders
            </button>
          </Link>

          <Link to="/customer/dashboard">
            <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3">
              <Home size={20} />
              Back to Home
            </button>
          </Link>
        </div>

        <p className="mt-8 text-gray-400 text-sm">
          Thank you for choosing MealMate ❤️
        </p>
      </motion.div>
    </div>
  );
}