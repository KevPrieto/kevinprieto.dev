"use client";

import { useState, useCallback } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CalendlyModal } from "./CalendlyModal";
import { FloatingCTA } from "./FloatingCTA";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = useCallback(() => {
    setIsCalendlyOpen(true);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA onClick={openCalendly} />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
}
