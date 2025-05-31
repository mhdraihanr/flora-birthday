import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import TitleCards from "../../components/TitleCards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="main-content">
        <TitleCards />
      </main>
      <Footer />
    </div>
  );
}
