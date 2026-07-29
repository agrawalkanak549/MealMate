import { Heart, Star, Clock } from "lucide-react";

function RestaurantCard({ restaurant }) {
  return (
    <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">

      <div className="relative overflow-hidden">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">

          <Heart size={18} className="text-red-500" />

        </button>

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {restaurant.name}
        </h2>

        <div className="flex justify-between mt-5">

          <span className="flex items-center gap-2 text-orange-500">

            <Star fill="orange" size={18} />

            {restaurant.rating}

          </span>

          <span className="flex items-center gap-2 text-gray-500">

            <Clock size={18} />

            {restaurant.time}

          </span>

        </div>

        <button className="mt-6 w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold transition">

          View Menu

        </button>

      </div>

    </div>
  );
}

export default RestaurantCard;