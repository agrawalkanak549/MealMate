import { motion } from "framer-motion";
import { User, Store, Bike, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Customer",
      description: "Order food from nearby restaurants.",
      icon: <User size={42} />,
      color: "from-orange-500 to-red-500",
      path: "/customer",
    },
    {
      title: "Restaurant",
      description: "Manage your restaurant & orders.",
      icon: <Store size={42} />,
      color: "from-green-500 to-emerald-500",
      path: "/restaurant",
    },
    {
      title: "Delivery Partner",
      description: "Deliver orders and earn money.",
      icon: <Bike size={42} />,
      color: "from-blue-500 to-cyan-500",
      path: "/delivery",
    },
    {
      title: "Admin",
      description: "Manage the entire platform.",
      icon: <ShieldCheck size={42} />,
      color: "from-purple-500 to-indigo-500",
      path: "/admin",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] flex items-center justify-center px-6">

      <div className="max-w-6xl w-full">

        <div className="text-center">

          <h1 className="text-5xl font-black text-slate-900">
            Choose Your Role
          </h1>

          <p className="mt-4 text-lg text-gray-500">
            Continue as the role that best describes you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {roles.map((role, index) => (

            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              onClick={() => navigate(role.path)}
              className="cursor-pointer rounded-3xl bg-white shadow-xl overflow-hidden"
            >

              <div
                className={`h-2 bg-gradient-to-r ${role.color}`}
              ></div>

              <div className="p-8 text-center">

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${role.color} text-white shadow-lg`}
                >
                  {role.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {role.title}
                </h2>

                <p className="mt-3 text-gray-500 leading-7">
                  {role.description}
                </p>

                <button
                  className={`mt-8 w-full rounded-2xl bg-gradient-to-r ${role.color} py-3 font-semibold text-white transition hover:opacity-90`}
                >
                  Continue
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default RoleSelection;