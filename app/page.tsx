import {
  ArrowIcon,
  Badge,
  GlassCard,
  GlowField,
  SectionLabel,
  SocialButton,
  Version,
} from "./functions";

const projects = [
  {
    name: "Wired To Burn",
    description:
      "This is a webstie for my band where we can post our latest music, post updates and upcoming shows and connect with fans and other bands.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    href: "https://wiredtoburn.com",
    gradient: "linear-gradient(160deg, #5e5ce6, #0a84ff)",
  },
  {
    name: "E-Commerce Website",
    description:
      "This is an e-commerce website I created for my glass art. It utilizes Firebase for auth and as a backend service and database. It integrates Stripe API to take payments. ",
    tech: ["React", "Node.js", "Firebase"],
    href: "https://synthesisglass.com",
    gradient: "linear-gradient(160deg, #ff9f43, #ff6b3d)",
  },
  {
    name: "KeeperAI",
    description:
      "I was part of a team that build an app that showcases soft skills in a work environment, graphically showcasing a personality determined by a series of question answered with images and short statements.  We also created a social media component and affinity groups. ",
    tech: ["React", "Firebase", "Docker"],
    href: "https://keeper-hr-test.web.app/home",
    gradient: "linear-gradient(160deg, #34d399, #30d158)",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
    gradient: "linear-gradient(160deg, #5ac8fa, #0a84ff)",
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
    gradient: "linear-gradient(160deg, #bf5af2, #5e5ce6)",
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "REST APIs"],
    gradient: "linear-gradient(160deg, #ff9f43, #ff6b3d)",
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux"],
    gradient: "linear-gradient(160deg, #8e8e93, #636366)",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/gregmall",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
      </svg>
    ),
    gradient: "linear-gradient(160deg, #4b4b4b, #1c1c1e)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h9v14.75h-9V8.75Zm14.75 0h.16v2.03h.05a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.82 2.13 3.82 4.9v8.48h-4v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97v7.65h-4V8.75h4.33Z" />
      </svg>
    ),
    gradient: "linear-gradient(160deg, #2f8fe0, #0a66c2)",
  },
  {
    label: "Email",
    href: "mailto:gregmall157@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 4.5h20v15H2v-15Zm1.7 1.7 8.3 6.5 8.3-6.5M3.7 18.2 9.8 12M20.3 18.2 14.2 12" />
      </svg>
    ),
    gradient: "linear-gradient(160deg, #5ac8fa, #0a84ff)",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projectIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6c.4 0 .8.2 1.1.5L11.6 7H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
  </svg>
);

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-1 flex-col bg-background">
      <GlowField className="fixed" />

      <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-semibold text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-xs font-bold text-white">
              GM
            </span>
            Greg Mall
          </a>
          <nav className="flex items-center gap-4 text-xs text-muted sm:gap-8 sm:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden shrink-0 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-accent/50 hover:bg-accent/10 sm:inline-block"
          >
            Say hello
          </a>
        </div>
      </header>

      <main
        id="top"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col gap-24 px-6 py-16 sm:py-24"
      >
        <section
          id="about"
          className="flex flex-col items-center gap-6 pt-4 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
            Open to new opportunities
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Greg Mall
          </h1>
          <p className="text-lg text-muted">Software Engineer</p>
          <p className="max-w-xl leading-7 text-muted">
            I build things for the web. A life long musician and artist. I
            love to make things.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="rounded-full bg-linear-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)] transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-6">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <GlassCard
                key={project.name}
                as="a"
                href={project.href}
                external
                className="gap-4 p-6"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{ background: project.gradient }}
                  >
                    {projectIcon}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-muted transition-colors group-hover:text-foreground">
                    View
                    <ArrowIcon />
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="skills" className="flex flex-col gap-6">
          <SectionLabel>Skills</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((group) => (
              <GlassCard key={group.category} className="gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-lg"
                    style={{ background: group.gradient }}
                  >
                    {group.category[0]}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-6">
          <SectionLabel>Contact</SectionLabel>
          <GlassCard className="items-center gap-8 px-6 py-14 text-center">
            <p className="max-w-sm leading-6 text-muted">
              Open to new opportunities and interesting projects. Reach out
              through any of the links below.
            </p>
            <div className="flex gap-6">
              {socials.map((social) => (
                <SocialButton
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  gradient={social.gradient}
                >
                  {social.icon}
                </SocialButton>
              ))}
            </div>
          </GlassCard>
        </section>

        <footer className="py-6 text-center text-xs text-muted">
          Greg Mall. Software Engineer. <Version />
        </footer>
      </main>
    </div>
  );
}
