function AboutMealMate() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-6">
          About MealMate
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-8">
          MealMate is a unified food ecosystem designed to connect
          customers, restaurants, delivery partners, NGOs and families
          through one powerful digital platform.

          Our mission is to simplify food ordering,
          encourage healthier eating,
          reduce food wastage,
          and make meal sharing accessible for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition">

            <div className="text-5xl mb-4">🍽️</div>

            <h3 className="text-2xl font-bold mb-3">
              Order Food
            </h3>

            <p className="text-gray-600">
              Browse thousands of restaurants and
              order your favorite meals in minutes.
            </p>

          </div>

          <div className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition">

            <div className="text-5xl mb-4">❤️</div>

            <h3 className="text-2xl font-bold mb-3">
              Feed Poor
            </h3>

            <p className="text-gray-600">
              Donate extra food or sponsor meals
              for people in need through trusted NGOs.
            </p>

          </div>

          <div className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition">

            <div className="text-5xl mb-4">🥗</div>

            <h3 className="text-2xl font-bold mb-3">
              Healthy Living
            </h3>

            <p className="text-gray-600">
              Personalized healthy meal plans,
              diet recommendations,
              and nutrition guidance.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMealMate;