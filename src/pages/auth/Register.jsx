import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

function Register() {
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
            "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-white"
        >
          <h1 className="text-6xl font-black leading-tight">
            Join
            <br />
            MealMate
          </h1>

          <p className="mt-6 text-lg max-w-md">
            Order delicious meals, discover restaurants,
            donate food and enjoy a smarter food experience.
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
            Create your account
          </p>

          <div className="bg-white rounded-[30px] shadow-2xl mt-8 p-8">

            <h3 className="text-3xl font-bold">
              Register
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
            >

              <div className="flex items-center border rounded-2xl px-4 py-4">
                <User className="text-orange-500" size={20} />
                <input
                  placeholder="Full Name"
                  className="ml-3 w-full outline-none"
                />
              </div>

              <div className="flex items-center border rounded-2xl px-4 py-4">
                <Mail className="text-orange-500" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="ml-3 w-full outline-none"
                />
              </div>

              <div className="flex items-center border rounded-2xl px-4 py-4">
                <Phone className="text-orange-500" size={20} />
                <input
                  placeholder="Phone Number"
                  className="ml-3 w-full outline-none"
                />
              </div>

              <div className="flex items-center border rounded-2xl px-4 py-4">

                <Lock className="text-orange-500" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="ml-3 w-full outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

              <button
                className="w-full rounded-2xl bg-orange-500 hover:bg-orange-600 py-4 text-white font-semibold flex justify-center items-center gap-2 transition"
              >
                Create Account
                <ArrowRight size={18} />
              </button>

            </form>

            <p className="text-center mt-8 text-gray-500">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 text-orange-500 font-semibold"
              >
                Login
              </Link>

            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Register;