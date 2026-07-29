import {
  Dumbbell,
  HeartPulse,
  Apple,
  Baby,
  ArrowRight,
} from "lucide-react";

function HealthyDiet() {
  const plans = [
    {
      title: "Weight Loss",
      icon: <HeartPulse size={30} />,
      color: "from-red-500 to-orange-500",
      desc: "Balanced low calorie meals with nutrition guidance.",
    },
    {
      title: "Gym Diet",
      icon: <Dumbbell size={30} />,
      color: "from-blue-500 to-indigo-500",
      desc: "Protein-rich meals for muscle growth and recovery.",
    },
    {
      title: "Healthy Lifestyle",
      icon: <Apple size={30} />,
      color: "from-green-500 to-emerald-500",
      desc: "Daily healthy meals for a better lifestyle.",
    },
    {
      title: "Kids Nutrition",
      icon: <Baby size={30} />,
      color: "from-pink-500 to-purple-500",
      desc: "Healthy and tasty meals specially designed for kids.",
    },
  ];

  return (
    <section className="bg-[#FFF8F2] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-600">
            AI HEALTHY DIET
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Eat Smart.
            <br />
            Live Better.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500 leading-8">
            MealMate recommends healthy meal plans according to
            your goals, lifestyle and nutrition requirements.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {plans.map((plan) => (

            <div
              key={plan.title}
              className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.color} text-white`}
              >
                {plan.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                {plan.desc}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-orange-500">
                Explore
                <ArrowRight size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HealthyDiet;