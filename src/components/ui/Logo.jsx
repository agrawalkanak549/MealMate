import { UtensilsCrossed } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="rounded-2xl bg-orange-500 p-3 text-white shadow-lg">
        <UtensilsCrossed size={28} />
      </div>

      <div>

        <h1 className="text-3xl font-black text-slate-900">
          MealMate
        </h1>

        <p className="text-sm text-gray-500">
          Order • Donate • Deliver
        </p>

      </div>

    </div>
  );
}

export default Logo;