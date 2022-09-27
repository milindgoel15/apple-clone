import Footer from "./components/elements/Footer";
import Header from "./components/elements/Header";
import Ribbon from "./components/elements/Ribbon";
import Hero from "./components/sections/Hero";
import Promo from "./components/sections/Promo";
import TVGallery from "./components/sections/TVGallery";

function App() {

  return (
    <>
      <Header />
      <main>
        <Ribbon />
        <Hero />
        <Promo />
        <TVGallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
