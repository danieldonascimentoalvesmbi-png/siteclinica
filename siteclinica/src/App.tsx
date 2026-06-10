/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Plans from "./components/Plans";
import Insurances from "./components/Insurances";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AdminConfig from "./components/AdminConfig";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation Layer */}
      <Header />

      {/* Main Sections Layout */}
      <main>
        <Hero />
        <Benefits />
        <About />
        <Gallery />
        <Plans />
        <Insurances />
        <Testimonials />
        <Process />
        <FAQ />
        <ContactForm />
        <CtaFinal />
      </main>

      {/* Footer and Interactive overlays */}
      <Footer />

      {/* Floating Interactive elements */}
      <FloatingWhatsApp />
      <AdminConfig />
    </div>
  );
}

