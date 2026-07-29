import { restaurants } from "../../data/restaurants";
import { Clock3, Star, Heart } from "lucide-react";

function RestaurantShowcase() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 text-orange-600 font-semibold">
            POPULAR RESTAURANTS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Discover Amazing Restaurants
          </h2>

          <p className="mt-5 text-slate-500 text-lg max-w-2xl mx-auto">
            Order from India's most loved restaurants and enjoy
            delicious meals delivered to your doorstep.
          </p>

        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {[
            "All",
            "Pizza",
            "Indian",
            "Healthy",
            "Bakery"
          ].map((item) => (

            <button
              key={item}
              className="rounded-full border border-orange-200 px-6 py-3 hover:bg-orange-500 hover:text-white transition"
            >
              {item}
            </button>

          ))}

        </div>

        {/* Restaurant Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

          {restaurants.map((restaurant) => (

            <div
              key={restaurant.id}
              className="group overflow-hidden rounded-3xl bg-[#FFF8F2] shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="relative overflow-hidden">

                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <button className="absolute top-4 right-4 rounded-full bg-white p-3 shadow-lg">

                  <Heart size={18} />

                </button>

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold">

                    {restaurant.name}

                  </h3>

                  <div className="flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-white">

                    <Star size={14} fill="white" />

                    {restaurant.rating}

                  </div>

                </div>

                <p className="mt-3 text-slate-500">

                  {restaurant.category}

                </p>

                <div className="mt-5 flex justify-between items-center">

                  <div className="flex items-center gap-2 text-slate-500">

                    <Clock3 size={18} />

                    {restaurant.delivery}

                  </div>

                  <span className="font-semibold">

                    {restaurant.price}

                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default RestaurantShowcase;