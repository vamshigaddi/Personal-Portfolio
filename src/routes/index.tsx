import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Highlights } from "@/components/portfolio/Highlights";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Projects } from "@/components/portfolio/Projects";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { Mindset } from "@/components/portfolio/Mindset";
import { Stack } from "@/components/portfolio/Stack";
import { Experience } from "@/components/portfolio/Experience";
import { WhatIBuild } from "@/components/portfolio/WhatIBuild";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vamshi — AI Engineer · Computer Vision, FastAPI, OCR" },
      {
        name: "description",
        content:
          "Vamshi is an AI Engineer with 3 years building practical AI systems: Computer Vision, FastAPI backends, OCR pipelines, and production-ready ML applications.",
      },
      { name: "keywords", content: "AI Engineer, Applied AI Engineer, Computer Vision Engineer, FastAPI Developer, Backend AI Engineer, OCR Engineer, YOLO, Gemini, GCP" },
      { property: "og:title", content: "Vamshi — AI Engineer" },
      { property: "og:description", content: "Building practical AI systems for real-world problems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vamshi",
          jobTitle: "AI Engineer",
          description:
            "Applied AI Engineer specializing in Computer Vision, FastAPI backend systems, OCR pipelines and AI workflow automation.",
          knowsAbout: [
            "Computer Vision",
            "FastAPI",
            "OCR",
            "YOLO",
            "Machine Learning",
            "Backend Engineering",
            "GCP",
          ],
          url: "https://github.com/vamshigaddi",
          sameAs: [
            "https://github.com/vamshigaddi",
            "https://www.linkedin.com/in/vamshi-gaddi-43750a198/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative min-h-dvh animate-page-in">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Expertise />
      <Projects />
      <OpenSource />
      <Mindset />
      <Stack />
      <Experience />
      <WhatIBuild />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
