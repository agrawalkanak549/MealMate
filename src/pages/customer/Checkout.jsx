import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  CreditCard,
  Wallet,
  Banknote,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const subtotal = 877;
  const deliveryFee = 49;
  const gst = 44;
  const total = subtotal + deliveryFee + gst;

  const placeOrder = () => {
    navigate("/customer/order-success");
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      {/* Header */}

      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center gap-4">
          <Link
            to="/customer/cart"
            className="p-2 rounded-full bg-slate-100"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold">Checkout</h1>
            <p className="text-gray-500">
              Review & confirm your order
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 mt-8 grid lg:grid-cols-3 gap-8">
        {/* Left */}

        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Address */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="text-orange-500" />
              <h2 className="text-xl font-bold">
                Delivery Address
              </h2>
            </div>

            <div className="border rounded-2xl p-5">
              <h3 className="font-semibold text-lg">
                Home
              </h3>

              <p className="text-gray-500 mt-2">
                24, Jagatpura Main Road,
                <br />
                Jaipur, Rajasthan - 302017
              </p>

              <button className="mt-5 text-orange-600 font-semibold">
                Change Address
              </button>
            </div>
          </motion.div>

          {/* Delivery */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3">
              <Clock3 className="text-orange-500" />
              <h2 className="text-xl font-bold">
                Delivery Time
              </h2>
            </div>

            <div className="mt-5 border rounded-2xl p-5">
              <p className="font-semibold">
                Estimated Arrival
              </p>

              <p className="text-orange-600 font-bold text-xl mt-2">
                25 - 30 Minutes
              </p>
            </div>
          </motion.div>

          {/* Payment */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-orange-500" />
              <h2 className="text-xl font-bold">
                Payment Method
              </h2>
            </div>

            <div className="space-y-4">
              <label
                className={`border rounded-2xl p-5 flex items-center justify-between cursor-pointer ${
                  paymentMethod === "upi"
                    ? "border-orange-500 bg-orange-50"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <Wallet className="text-orange-500" />

                  <div>
                    <h3 className="font-semibold">
                      UPI Payment
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Google Pay, PhonePe, Paytm
                    </p>
                  </div>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "upi"}
                  onChange={() =>
                    setPaymentMethod("upi")
                  }
                />
              </label>

              <label
                className={`border rounded-2xl p-5 flex items-center justify-between cursor-pointer ${
                  paymentMethod === "card"
                    ? "border-orange-500 bg-orange-50"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <CreditCard className="text-orange-500" />

                  <div>
                    <h3 className="font-semibold">
                      Debit / Credit Card
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Visa, MasterCard, RuPay
                    </p>
                  </div>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() =>
                    setPaymentMethod("card")
                  }
                />
              </label>

              <label
                className={`border rounded-2xl p-5 flex items-center justify-between cursor-pointer ${
                  paymentMethod === "cod"
                    ? "border-orange-500 bg-orange-50"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <Banknote className="text-orange-500" />

                  <div>
                    <h3 className="font-semibold">
                      Cash on Delivery
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Pay when your order arrives
                    </p>
                  </div>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() =>
                    setPaymentMethod("cod")
                  }
                />
              </label>
            </div>
          </motion.div>
        </div>

        {/* Summary */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl shadow-xl p-7 h-fit sticky top-24"
        >
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Food Total</span>
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
              <span>Total Payable</span>

              <span className="text-orange-600">
                ₹{total}
              </span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-8 bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-semibold flex justify-center items-center gap-3"
          >
            <CheckCircle2 size={22} />
            Place Order
          </button>
        </motion.div>
      </div>
    </div>
  );
}