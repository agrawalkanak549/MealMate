import {
  UtensilsCrossed,
  HeartHandshake,
  Salad,
  Bike,
  ChefHat,
  CakeSlice,
  Baby,
  CalendarCheck,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Order Food",
    description:
      "Discover thousands of restaurants and order your favourite meals with live tracking.",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-500",
    size: "large",
  },

  {
    id: 2,
    title: "Healthy Meals",
    description:
      "AI powered healthy diet recommendations and personalized meal plans.",
    icon: Salad,
    color: "from-green-400 to-emerald-500",
    size: "small",
  },

  {
    id: 3,
    title: "Table Booking",
    description:
      "Reserve tables instantly at premium restaurants near you.",
    icon: CalendarCheck,
    color: "from-blue-400 to-cyan-500",
    size: "small",
  },

  {
    id: 4,
    title: "Bakery",
    description:
      "Fresh cakes, desserts and pastries delivered every day.",
    icon: CakeSlice,
    color: "from-pink-400 to-rose-500",
    size: "small",
  },

  {
    id: 5,
    title: "Kids Corner",
    description:
      "Healthy and delicious meals specially prepared for children.",
    icon: Baby,
    color: "from-yellow-400 to-orange-400",
    size: "small",
  },

  {
    id: 6,
    title: "NGO Support",
    description:
      "Donate meals and reduce food wastage by helping nearby communities.",
    icon: HeartHandshake,
    color: "from-purple-500 to-pink-500",
    size: "large",
  },

  {
    id: 7,
    title: "Fast Delivery",
    description:
      "Real-time delivery tracking with trusted delivery partners.",
    icon: Bike,
    color: "from-indigo-500 to-sky-500",
    size: "small",
  },

  {
    id: 8,
    title: "Restaurant Partner",
    description:
      "Manage menus, orders, revenue and customers from one dashboard.",
    icon: ChefHat,
    color: "from-amber-500 to-orange-500",
    size: "large",
  },
];