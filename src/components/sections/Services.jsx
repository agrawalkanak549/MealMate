function Services() {
  const services = [
    {
      title: "Food Ordering",
      icon: "🍕",
      description:
        "Browse thousands of restaurants and order your favourite meals."
    },
    {
      title: "Table Booking",
      icon: "🍽️",
      description:
        "Reserve tables in your favourite restaurants instantly."
    },
    {
      title: "Healthy Diet",
      icon: "🥗",
      description:
        "Personalized meal plans designed by nutrition experts."
    },
    {
      title: "Kids Corner",
      icon: "🧒",
      description:
        "Healthy and fun meals specially prepared for children."
    },
    {
      title: "Bakery",
      icon: "🧁",
      description:
        "Fresh cakes, pastries, cookies and desserts delivered daily."
    },
    {
      title: "Dairy Products",
      icon: "🥛",
      description:
        "Milk, cheese, butter, yogurt and fresh dairy essentials."
    },
    {
      title: "Feed Poor",
      icon: "❤️",
      description:
        "Donate meals through NGOs and help eliminate food waste."
    },
    {
      title: "Fast Delivery",
      icon: "🛵",
      description:
        "Real-time delivery tracking with verified delivery partners."
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-orange-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-5">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Everything you need in one intelligent food ecosystem.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;