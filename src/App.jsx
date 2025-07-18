import Header from "./components/landingPage/header";
import HeroSection from "./components/landingPage/heroSection";
import FeatureSection from "./components/landingPage/FeatureSection";
import HowItWorks from "./components/landingPage/HowItWorks";
import Subscribe from "./components/landingPage/Subscribe";
import CallToAction from "./components/landingPage/CallToAction";
import FootingSection from "./components/landingPage/FootingSection";

import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <Subscribe />
      <CallToAction />
      <FootingSection />
    </div>
  );
};

export default App;
