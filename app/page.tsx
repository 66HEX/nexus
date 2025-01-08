import Preloader from "@/app/components/Preloader/preloader";
import Hero from './sections/Hero/hero';
import Features from "@/app/sections/Features/features";
import Mission from './sections/Mission/mission';
import Pricing from "@/app/sections/Pricing/pricing";
import FAQ from "@/app/sections/FAQ/faq";

const Home = () => {
  return (
      <div>
          <Preloader/>
          <Hero/>
          <Features/>
          <Mission/>
          <Pricing/>
          <FAQ/>
      </div>
  );
};

export default Home;