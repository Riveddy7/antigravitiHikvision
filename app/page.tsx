import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import SolutionsGrid from "./components/SolutionsGrid";
import ComplaintsCarousel from "./components/ComplaintsCarousel";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-void selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <SolutionsGrid />
      <ComplaintsCarousel />
      <ContactForm />

      <footer className="py-8 text-center text-text-secondary text-sm bg-bg-carbon border-t border-border-dim">
        <p>&copy; 2025 IAMET. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
