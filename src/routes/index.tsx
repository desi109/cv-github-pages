import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/desislava.jpg";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, ArrowUpRight, Code2, Briefcase, GraduationCap, Award, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desislava Milusheva — Software Engineer" },
      { name: "description", content: "Software Engineer at Experian. Java, Spring Boot, Angular, React, Kubernetes. Sofia, Bulgaria." },
      { property: "og:title", content: "Desislava Milusheva — Software Engineer" },
      { property: "og:description", content: "Full-stack engineer crafting scalable distributed systems." },
    ],
  }),
  component: Portfolio,
});

const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Shell / Bash", "HTML", "CSS"],
  },
  {
    label: "Backend & Frameworks",
    items: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate / JPA", "OSGi", "REST APIs", "Microservices", "JUnit", "Mockito"],
  },
  {
    label: "Frontend",
    items: ["Angular", "React", "RxJS", "NgRx", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Cloud, DevOps & Data",
    items: ["Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions", "Kafka", "Druid", "Superset", "PostgreSQL", "MongoDB", "Elasticsearch / OpenSearch", "Prometheus", "Grafana", "Maven", "Gradle", "Git"],
  },
];

const languages = [
  { name: "Bulgarian", level: "Native" },
  { name: "English", level: "Professional (Cambridge FCE)" },
  { name: "German", level: "Elementary" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Experian",
    location: "Sofia, Bulgaria",
    period: "Jun 2024 – Present",
    desc: "Building Experian CrossCore — a cloud platform orchestrating fraud detection, identity verification, and risk-based decisioning across global financial institutions at scale.",
    highlights: [
      "Design and ship full-stack features end-to-end across Java/Spring Boot microservices and Angular/React frontends.",
      "Operate and tune services on Kubernetes with Jenkins CI/CD, OpenSearch and observability via Prometheus & Grafana.",
      "Collaborate across distributed teams on architecture, code reviews and production incident response for real-time transaction flows.",
      "Adopt AI-assisted developer tooling to accelerate delivery while keeping code quality and test coverage high.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "React", "Kubernetes", "Jenkins", "OpenSearch"],
  },
  {
    role: "Software Engineer",
    company: "Cognyte",
    location: "Sofia, Bulgaria",
    period: "Aug 2023 – May 2024",
    desc: "Worked on the Network Intelligence Analytics product, building automation tooling around real-world mobile network traffic.",
    highlights: [
      "Designed and developed a Mobile Automation Framework that generates real network traffic via YAML-driven device automation.",
      "Built an Automated Verification Report system that aggregates results across test runs and surfaces regressions.",
      "Hardened CI pipelines and integrated automation suites into the team's release process.",
    ],
    stack: ["Java", "Mobile Automation", "YAML", "CI/CD"],
  },
  {
    role: "Associate Software Engineer",
    company: "Software AG",
    location: "Sofia, Bulgaria",
    period: "Dec 2020 – Jul 2023",
    desc: "Owned components on the OSGi-based Common Platform that powers nearly every Software AG product.",
    highlights: [
      "Built the Diagnostic Tool that collects logs, configuration and runtime state to accelerate support investigations.",
      "Developed the Installation Validator, catching misconfigurations across complex on-prem deployments before they hit production.",
      "Implemented the Metering component that streams webMethods product usage to the cloud for licensing and analytics.",
      "Reviewed code, mentored interns and contributed to platform-wide architectural decisions.",
    ],
    stack: ["Java", "OSGi", "webMethods"],
  },
  {
    role: "Intern",
    company: "Software AG",
    location: "Sofia, Bulgaria",
    period: "Apr 2020 – Dec 2020",
    desc: "Joined the Common Platform team as an intern and grew into ownership of small features.",
    highlights: [
      "Implemented features and fixed bugs across Java/OSGi services with full code review and testing discipline.",
      "Authored much of the team's internal onboarding curriculum — product walkthroughs, setup guides and architecture deep-dives.",
    ],
    stack: ["Java", "Documentation"],
  },
  {
    role: "Winter Practice",
    company: "SAP",
    location: "Sofia, Bulgaria",
    period: "Nov 2019 – Jan 2020",
    desc: "Short-form practical program rotating between hands-on Java work and a streaming analytics prototype.",
    highlights: [
      "Implemented a RomanNumeralConverter Java application end-to-end with tests.",
      "Prototyped a real-time analytics pipeline streaming logs through Kafka → Druid → Superset.",
    ],
    stack: ["Java", "Kafka", "Druid", "Superset"],
  },
  {
    role: "Mentor",
    company: "MindHub Coding Schools",
    location: "Sofia, Bulgaria",
    period: "Oct 2019 – Jan 2020",
    desc: "Taught programming fundamentals to children from kindergarten through 4th grade.",
    highlights: [
      "Led classes building small games and robots, adapting material to different ages and skill levels.",
      "Helped students debug their own code and develop curiosity about how software works.",
    ],
    stack: ["Teaching", "Scratch"],
  },
];

const universityProjects = [
  { name: "linkio.space", url: "https://github.com/desi109/linkio.space" },
  { name: "Fit Yummy BAR", url: "https://github.com/desi109/fit-yummy-bar" },
  { name: "Insertion Sort Algorithm Visualizer", url: "https://github.com/desi109/insertion-sort-algorithm-visualizer" },
  { name: "AWS Presentation", url: "https://github.com/desi109/aws-presentation" },
  { name: "OS — Shell Script: Sequential Numbers File", url: "https://github.com/desi109/os-task-and-presentation" },
  { name: "Multiple Sequence Alignment — SARS-2 (gene 3) with T-Coffee", url: "https://github.com/desi109/multiple-sequence-alignment-of-10-genetic-sequences-of-sars-2-gene-3-t-coffee" },
  { name: "Setup HTTP Server under Linux", url: "https://github.com/desi109/setup-http-server-under-linux" },
  { name: "Software Architectures — Abstract", url: "https://github.com/desi109/software_architectures" },
  { name: "Store Management System", url: "https://github.com/desi109/store-management-system" },
  { name: "Smart Home Platform", url: "https://github.com/desi109/smart-home-platform" },
  { name: "Crypto Pay", url: "https://github.com/desi109/crypto-pay" },
];

const otherProjects = [
  { name: "Bike Company App", url: "https://github.com/desi109/bike-company-app" },
  { name: "DIZIphotography", url: "https://github.com/desi109/diziphotography" },
  { name: "Kafka + Druid + Superset", url: "https://github.com/desi109/kafka-druid-superset" },
  { name: "OSGi Bundle Tutorial", url: "https://github.com/desi109/osgi-bundle-tutorial" },
  { name: "Zip Splitter Utility", url: "https://github.com/desi109/zip-splitter-utility" },
];


const education = [
  { school: "Technical University of Sofia", degree: "Master's — IoT, AI, ML, Cloud", period: "Oct 2023 – Jul 2024" },
  { school: "Technical University of Sofia", degree: "Bachelor's — Computer Science", period: "Oct 2019 – Sep 2023" },
  { school: "NPMG Acad. Lyubomir Chakalov", degree: "Physics, Mathematics & Informatics", period: "Sep 2013 – Jun 2018" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif text-lg tracking-tight">Desislava Milusheva</a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground font-medium">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a
            href="https://www.linkedin.com/in/desislava-milusheva-200574151/"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm" variant="outline" className="rounded-full">
              Get in touch
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-36 pb-28 px-6 relative overflow-hidden border-b border-border/60" style={{ background: "var(--gradient-soft)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-primary" /> Software Engineer · Sofia, Bulgaria
            </div>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.02]">
              Desislava<br />Milusheva
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I design and build scalable distributed systems, working across Java, Spring Boot, React, Angular and Kubernetes — from architecture to production.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects"><Button size="lg" className="rounded-full">View selected work <ArrowUpRight className="ml-1 h-4 w-4" /></Button></a>
              <a href="mailto:demilusheva@gmail.com"><Button size="lg" variant="outline" className="rounded-full">Contact</Button></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Sofia, Bulgaria</span>
              <a href="mailto:demilusheva@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors"><Mail className="h-3.5 w-3.5" />demilusheva@gmail.com</a>
              <a href="https://github.com/desi109" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors"><Github className="h-3.5 w-3.5" /> GitHub</a>
              <a href="https://www.linkedin.com/in/desislava-milusheva-200574151/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] opacity-25 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
            <img
              src={portrait}
              alt="Portrait of Desislava Milusheva"
              className="relative rounded-[1.25rem] w-full max-w-sm mx-auto object-cover aspect-[4/5] border border-border"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
        </div>
      </section>

      {/* About / Skills */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={<Code2 className="h-4 w-4" />}>About</SectionLabel>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 mt-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight">Engineer by trade, builder by instinct.</h2>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                I design and ship microservices, own features end-to-end, and care deeply about code quality, test automation, and developer experience. Lately I've been deep in cloud-native fraud-prevention infrastructure — distributed systems, OpenSearch, and Kubernetes — while leveraging AI-assisted tooling to move faster.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Outside of work: photography, guitar, ice skating, running, and the occasional tennis match.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">Tech stack</h3>
                <div className="space-y-5">
                  {skillGroups.map((g) => (
                    <div key={g.label}>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-primary/80 mb-2">{g.label}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {g.items.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-md text-xs font-medium bg-card text-foreground border border-border">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Languages</h3>
                <ul className="space-y-1.5 text-sm">
                  {languages.map((l) => (
                    <li key={l.name} className="flex justify-between gap-4 border-b border-border/60 pb-1.5">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-muted-foreground">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6 border-y border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={<Briefcase className="h-4 w-4" />}>Experience</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mt-4">Six years building production systems.</h2>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <div key={e.company + e.period} className="grid md:grid-cols-[180px_1fr] gap-6 py-8 group">
                <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  <div>{e.period}</div>
                  <div className="text-[11px] mt-1 normal-case tracking-normal">{e.location}</div>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-xl font-semibold">{e.role}</h3>
                    <span className="text-primary font-medium">{e.company}</span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">{e.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground leading-relaxed max-w-3xl list-disc pl-5 marker:text-primary/60">
                    {e.highlights.map((h) => (<li key={h}>{h}</li>))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground">
                    {e.stack.map((s) => (<span key={s}>{s}</span>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={<Github className="h-4 w-4" />}>Selected work</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Projects & writing.</h2>
            <a href="https://github.com/desi109?tab=repositories" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              All repositories <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <ProjectGroup
            icon={<GraduationCap className="h-4 w-4" />}
            title="University projects"
            items={universityProjects}
          />

          <ProjectGroup
            icon={<FolderGit2 className="h-4 w-4" />}
            title="Other projects"
            items={otherProjects}
          />

        </div>
      </section>

      {/* Education + Certs */}
      <section className="py-28 px-6 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel icon={<GraduationCap className="h-4 w-4" />}>Education</SectionLabel>
            <div className="mt-8 space-y-4">
              {education.map((e) => (
                <div key={e.school + e.period} className="border-l-2 border-primary/40 pl-5 py-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{e.period}</div>
                  <div className="font-semibold mt-1.5">{e.degree}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{e.school}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel icon={<Award className="h-4 w-4" />}>Certifications</SectionLabel>
            <div className="mt-8 space-y-4">
              <div className="border-l-2 border-primary/40 pl-5 py-1">
                <div className="font-semibold">AWS Academy Cloud Foundations</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">Issued Mar 2024</div>
                <a href="https://www.credly.com/badges/0f16d6d3-c61e-4368-b4bb-62c1f9d8b4fc" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2">
                  View credential <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="border-l-2 border-primary/40 pl-5 py-1">
                <div className="font-semibold">Cambridge English — First Certificate</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">Credential ID 17CBG0050005</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel icon={<Mail className="h-4 w-4" />} center>Contact</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl tracking-tight leading-tight">
            Let's build something <em className="text-primary not-italic">great</em>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Open to full-stack and platform engineering challenges.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="mailto:demilusheva@gmail.com"><Button size="lg" className="rounded-full"><Mail className="mr-2 h-4 w-4" /> demilusheva@gmail.com</Button></a>
            <a href="tel:+359876354337"><Button size="lg" variant="outline" className="rounded-full"><Phone className="mr-2 h-4 w-4" /> +359 87 635 4337</Button></a>
          </div>
          <div className="mt-8 flex justify-center gap-4 text-muted-foreground">
            <a href="https://github.com/desi109" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/desislava-milusheva-200574151/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Desislava Milusheva</span>
          <span className="font-mono text-xs uppercase tracking-wider">Sofia · Bulgaria</span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, icon, center = false }: { children: React.ReactNode; icon?: React.ReactNode; center?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary ${center ? "mx-auto" : ""}`}>
      <span className="w-6 h-px bg-primary" />
      {children}
    </div>
  );
}

function ProjectGroup({ icon, title, items }: { icon: React.ReactNode; title: string; items: { name: string; url: string }[] }) {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-primary">{icon}</span>
        <h3 className="font-serif text-2xl tracking-tight">{title}</h3>
        <span className="text-xs font-mono text-muted-foreground">({items.length})</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {items.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group p-5 bg-background hover:bg-card flex items-start justify-between gap-3"
            style={{ transition: "var(--transition-smooth)" }}
          >
            <span className="text-sm font-medium group-hover:text-primary transition-colors leading-snug">{p.name}</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
