import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import Expertise from "@/components/Expertise";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import OurOffice from "@/components/OurOffice";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Expertise />
        <Approach />
        <Services />
        <OurOffice />
        <About />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
