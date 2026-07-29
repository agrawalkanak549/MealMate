import RestaurantCard from "../cards/RestaurantCard";

function PopularRestaurants() {

  const restaurants = [

    {
      name: "Italian Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
      rating: 4.8,
      time: "25 min",
    },

    {
      name: "Burger House",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
      rating: 4.7,
      time: "18 min",
    },

    {
      name: "Healthy Bowl",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900",
      rating: 4.9,
      time: "20 min",
    },

  ];

  return (

    <section className="mt-20">

      <div className="flex justify-between items-center">

        <h2 className="text-4xl font-black">
          Popular Restaurants
        </h2>

        <button className="text-orange-500 font-semibold">
          View All
        </button>

      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        {restaurants.map((restaurant) => (

          <RestaurantCard
            key={restaurant.name}
            restaurant={restaurant}
          />

        ))}

      </div>

    </section>

  );
}

export default PopularRestaurants;