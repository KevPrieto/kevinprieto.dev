import { Hero } from "@/components/Hero";
import { TypographyBlock } from "@/components/TypographyBlock";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TypographyBlock />
      <ProjectsSection />
      <ToolsSection />
      <HighlightsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
