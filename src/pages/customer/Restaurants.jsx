import { Search, Star, Clock, MapPin, Heart } from "lucide-react";

function Restaurants() {
  const restaurants = [
    {
      id: 1,
      name: "Italian Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
      rating: 4.8,
      time: "25 min",
      location: "2.1 km",
    },
    {
      id: 2,
      name: "Burger House",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      rating: 4.7,
      time: "18 min",
      location: "1.5 km",
    },
    {
      id: 3,
      name: "Healthy Bowl",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      rating: 4.9,
      time: "20 min",
      location: "3 km",
    },
    {
      id: 4,
      name: "Sweet Dessert",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
      rating: 4.6,
      time: "15 min",
      location: "900 m",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <h1 className="text-5xl font-black">
          Restaurants
        </h1>

        <p className="text-gray-500 mt-2">
          Discover restaurants near you.
        </p>

        <div className="bg-white rounded-2xl shadow mt-8 flex items-center px-5 py-4">

          <Search className="text-orange-500"/>

          <input
            placeholder="Search Restaurant..."
            className="ml-4 outline-none w-full"
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {restaurants.map((restaurant) => (

            <div
              key={restaurant.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <div className="relative">

                <img
                  src={restaurant.image}
                  className="w-full h-64 object-cover"
                />

                <button className="absolute top-4 right-4 bg-white p-2 rounded-full">

                  <Heart className="text-red-500"/>

                </button>

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold">

                  {restaurant.name}

                </h2>

                <div className="flex justify-between mt-5 text-gray-500">

                  <span className="flex gap-2 items-center">

                    <Star
                      size={18}
                      fill="orange"
                      className="text-orange-500"
                    />

                    {restaurant.rating}

                  </span>

                  <span className="flex gap-2 items-center">

                    <Clock size={18}/>

                    {restaurant.time}

                  </span>

                  <span className="flex gap-2 items-center">

                    <MapPin size={18}/>

                    {restaurant.location}

                  </span>

                </div>

                <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold">

                  View Restaurant

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Restaurants;