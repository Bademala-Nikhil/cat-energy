import Header from "../components/Header";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import HowItWorks from "../components/HowItWorks";
import Example from "../components/Example";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Programs />
      <HowItWorks />
      <Example />
      <MapSection />
      <Footer />
    </div>
  );
}

export default HomePage;
