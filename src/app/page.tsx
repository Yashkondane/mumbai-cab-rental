import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import PopularRoutes from "@/components/PopularRoutes";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <PopularRoutes />
        <Fleet />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
