import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { SectionDivider } from "@/components/ui/Section";
import { TechStrip } from "@/components/ui/TechStrip";
import {
  achievements,
  education,
  profile,
  projects,
  siteUrl,
  skillCategories,
} from "@/data/site";
import { getResumeLink } from "@/lib/resume";

export default function Home() {
  // Resolved at build time: real PDF if present, otherwise the /resume route.
  const resume = getResumeLink();

  return (
    <>
      <ScrollProgress />
      <Navbar resumeHref={resume.href} resumeDownload={resume.download} />

      <main id="main" className="flex-1">
        <Hero resumeHref={resume.href} resumeDownload={resume.download} />
        <TechStrip />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />

      <StructuredData />
    </>
  );
}

/**
 * JSON-LD so search engines can read the profile as a Person entity rather than
 * inferring it from prose. Mirrors the on-page content exactly.
 */
function StructuredData() {
  const skills = Array.from(
    new Set(skillCategories.flatMap((category) => category.items)),
  );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        jobTitle: "Full-Stack Developer",
        description: profile.intro,
        email: `mailto:${profile.email}`,
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ghaziabad",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education[0].institution,
        },
        knowsAbout: skills,
        sameAs: [profile.github, profile.linkedin, profile.leetcode],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} — Portfolio`,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      ...projects.map((project) => ({
        "@type": "SoftwareSourceCode",
        name: project.name,
        description: project.solution,
        author: { "@id": `${siteUrl}/#person` },
        programmingLanguage: project.stack,
        ...(project.github ? { codeRepository: project.github } : {}),
        ...(project.demo ? { url: project.demo } : {}),
      })),
      {
        "@type": "ItemList",
        name: "Achievements",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: `${achievements.highlight.title} — ${achievements.highlight.tag}`,
          },
          ...achievements.items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: item.title,
          })),
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Content is static and author-controlled.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
