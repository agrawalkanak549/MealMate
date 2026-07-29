import CategoryCard from "../cards/CategoryCard";

function Categories() {

  const categories = [

    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
    },

    {
      name: "Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
    },

    {
      name: "Healthy",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700",
    },

    {
      name: "Dessert",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700",
    },

  ];

  return (

    <section className="mt-16">

      <h2 className="text-4xl font-black">
        Categories
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">

        {categories.map((category) => (

          <CategoryCard
            key={category.name}
            category={category}
          />

        ))}

      </div>

    </section>

  );
}

export default Categories;