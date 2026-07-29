import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/roles");
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] grid lg:grid-cols-2">

      {/* Left */}

      <div
        className="hidden lg:flex relative items-end p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-white"
        >
          <h1 className="text-6xl font-black leading-tight">
            Fresh Food
            <br />
            Delivered Fast.
          </h1>

          <p className="mt-6 text-lg max-w-md">
            Discover restaurants, healthy meals,
            bakeries and food donations
            all in one platform.
          </p>
        </motion.div>
      </div>

      {/* Right */}

      <div className="flex items-center justify-center p-8">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >

          <h2 className="text-5xl font-black text-orange-500">
            MealMate
          </h2>

          <p className="text-gray-500 mt-2">
            Welcome Back 👋
          </p>

          <div className="bg-white rounded-[30px] shadow-2xl mt-8 p-8">

            <h3 className="text-3xl font-bold">
              Login
            </h3>

            <p className="text-gray-500 mt-2">
              Continue your food journey.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 mt-8"
            >

              <div>

                <label className="font-medium">
                  Email
                </label>

                <div className="flex items-center mt-2 rounded-2xl border px-4 py-4">

                  <Mail
                    size={20}
                    className="text-orange-500"
                  />

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="ml-3 w-full outline-none"
                  />

                </div>

              </div>

              <div>

                <label className="font-medium">
                  Password
                </label>

                <div className="flex items-center mt-2 rounded-2xl border px-4 py-4">

                  <Lock
                    size={20}
                    className="text-orange-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="ml-3 w-full outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff
                        size={18}
                        className="text-gray-500"
                      />
                    ) : (
                      <Eye
                        size={18}
                        className="text-gray-500"
                      />
                    )}
                  </button>

                </div>

              </div>

              <div className="flex justify-between text-sm">

                <label className="flex gap-2">

                  <input type="checkbox" />

                  Remember me

                </label>

                <button
                  type="button"
                  className="text-orange-500"
                >
                  Forgot?
                </button>

              </div>

              <button
                className="w-full rounded-2xl bg-orange-500 hover:bg-orange-600 py-4 text-white font-semibold flex justify-center items-center gap-2 transition"
              >
                Login

                <ArrowRight size={18} />

              </button>

            </form>

            <div className="flex items-center my-8">

              <div className="flex-1 h-px bg-gray-200"></div>

              <span className="mx-4 text-gray-400">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-200"></div>

            </div>

            <button
              className="w-full rounded-2xl border py-4 hover:bg-gray-50 transition font-medium"
            >
              Continue with Google
            </button>

            <p className="text-center mt-8 text-gray-500">

              Don't have an account?

              <Link
                to="/register"
                className="ml-2 text-orange-500 font-semibold"
              >
                Register
              </Link>

            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Login;