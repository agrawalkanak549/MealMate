import { Bell, ShoppingCart, User } from "lucide-react";

function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-black text-orange-500">
            MealMate
          </h1>

          <p className="text-sm text-gray-500">
            One Platform. Every Meal.
          </p>
        </div>

        <div className="flex items-center gap-4">

          <button className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition">
            <Bell size={20} />
          </button>

          <button className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-105 transition">
            <ShoppingCart size={20} />
          </button>

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
            alt="profile"
            className="w-11 h-11 rounded-full object-cover border-2 border-orange-500"
          />

        </div>

      </div>
    </header>
  );
}

export default TopNavbar;