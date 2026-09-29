"use client";

import { useState } from "react";
import SplashScreen from "@/components/ui/SplashScreen";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import OrangeDivider from "@/components/layout/OrangeDivider";
import About from "@/components/sections/About";
import Feature from "@/components/sections/Feature";
import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ScrollProvider } from "@/lib/ScrollContext";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <LanguageProvider>
      <ScrollProvider>
        <SplashScreen onComplete={() => setLoading(false)} />
        <main className="min-h-screen bg-Cream text-[#1C140E]">
          <Navbar />
          <Hero isLoaded={!loading} />
          <OrangeDivider />
          <About />
          <Feature />
          <Form />
          <Footer />
        </main>
      </ScrollProvider>
    </LanguageProvider>
  );
}