"use client";

import { useState, useCallback } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CalendlyModal } from "./CalendlyModal";

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
      <Header onGetInTouchClick={openCalendly} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
}
