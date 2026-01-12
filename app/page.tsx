import { Hero } from "@/components/Hero";
import { TypographyBlock } from "@/components/TypographyBlock";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TypographyBlock />
      <WhatIDoSection />
      <ProjectsSection />
      <ToolsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
