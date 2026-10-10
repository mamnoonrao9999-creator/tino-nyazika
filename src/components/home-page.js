"use client";

import Hero from "@/components/sections/Hero";
import Booking from "@/components/sections/Booking";
import ClientWins from "@/components/sections/ClientWins";
import Services from "@/components/sections/Services";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Booking />
      <ClientWins />
      <Services />
      <FinalCta />
      <Footer />
    </div>
  );
}