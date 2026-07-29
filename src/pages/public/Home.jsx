import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import RestaurantShowcase from "../../components/sections/RestaurantShowcase";
import HealthyDiet from "../../components/sections/HealthyDiet";
import Testimonials from "../../components/sections/Testimonials";
import CTA from "../../components/sections/CTA";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <RestaurantShowcase />

        <HealthyDiet />

        <Testimonials />

        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;