function CategoryCard({ category }) {
  return (
    <div className="group cursor-pointer">

      <div className="overflow-hidden rounded-3xl shadow-lg">

        <img
          src={category.image}
          alt={category.name}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <h3 className="mt-4 text-center text-xl font-bold">
        {category.name}
      </h3>

    </div>
  );
}

export default CategoryCard;