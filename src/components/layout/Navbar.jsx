import { Menu, ArrowRight } from "lucide-react";

function Navbar() {

    return (

        <nav className="fixed top-0 left-0 w-full z-50">

            <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-8 py-4 backdrop-blur-xl shadow-xl">

                <div>

                    <h1 className="text-3xl font-black text-orange-500">
                        MealMate
                    </h1>

                    <p className="text-xs text-gray-500">
                        One Platform. Every Meal.
                    </p>

                </div>

                <ul className="hidden lg:flex gap-10 text-gray-700">

                    <li className="cursor-pointer hover:text-orange-500 transition">
                        Home
                    </li>

                    <li className="cursor-pointer hover:text-orange-500 transition">
                        Features
                    </li>

                    <li className="cursor-pointer hover:text-orange-500 transition">
                        Partners
                    </li>

                    <li className="cursor-pointer hover:text-orange-500 transition">
                        About
                    </li>

                    <li className="cursor-pointer hover:text-orange-500 transition">
                        Contact
                    </li>

                </ul>

                <div className="flex items-center gap-4">

                    <button className="hidden md:block px-5 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">

                        Login

                    </button>

                    <button className="rounded-full bg-orange-500 px-6 py-3 text-white flex items-center gap-2 hover:scale-105 transition">

                        Get Started

                        <ArrowRight size={18}/>

                    </button>

                    <Menu className="lg:hidden"/>

                </div>

            </div>

        </nav>

    )

}

export default Navbar;