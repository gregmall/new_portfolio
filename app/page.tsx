const projects = [
  {
    name: "Wired To Burn",
    description:
      "This is a webstie for my band where we can post our latest music, post updates and upcoming shows and connect with fans and other bands.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    href: "https://wiredtoburn.com",
  },
  {
    name: "E-Commerce Website",
    description:
      "This is an e-commerce website I created for my glass art. It utilizes Firebase for auth and as a backend service and database. It integrates Stripe API to take payments. ",
    tech: ["React", "Node.js", "Firebase"],
    href: "https://synthesisglass.com",
  },
  {
    name: "KeeperAI",
    description:
      "I was part of a team that build an app that showcases soft skills in a work environment, graphically showcasing a personality determined by a series of question answered with images and short statements.  We also created a social media component and affinity groups. ",
    tech: ["React", "Firebase", "Docker"],
    href: "https://keeper-hr-test.web.app/home",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux"],
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/gregmall",
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/greg-mall-he-him-3032771b1/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.75h9v14.75h-9V8.75Zm14.75 0h.16v2.03h.05a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.82 2.13 3.82 4.9v8.48h-4v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97v7.65h-4V8.75h4.33Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:gregmall157@gmail.com",
    icon: (
      <path d="M2 4.5h20v15H2v-15Zm1.7 1.7 8.3 6.5 8.3-6.5M3.7 18.2 9.8 12M20.3 18.2 14.2 12" />
    ),
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const eqDelays = ["0s", "0.15s", "0.3s", "0.1s"];

function EqBars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-end gap-[2px] ${className}`}>
      {eqDelays.map((delay, i) => (
        <span
          key={i}
          className="eq-bar w-[3px] rounded-full bg-linear-to-t from-accent to-accent-2"
          style={{ height: "12px", animationDelay: delay }}
        />
      ))}
    </span>
  );
}

function Vinyl({ className = "" }: { className?: string }) {
  return (
    <div
      className={`vinyl-spin rounded-full ${className}`}
      style={{
        background:
          "repeating-radial-gradient(circle at center, #000 0px, #000 3px, #221a2b 4px, #000 5px)",
        boxShadow: "0 0 40px -10px rgba(255,47,146,0.4)",
      }}
    >
      <div className="relative h-full w-full">
        <div
          className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[6%] w-[6%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
      </div>
    </div>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-card ${className}`}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-accent to-accent-2" />
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-display text-2xl tracking-wide text-foreground">
      <span className="text-accent">&#9834;</span>
      {children}
      <span className="h-px flex-1 bg-linear-to-r from-accent-2/50 to-transparent" />
    </h2>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-2xl tracking-wide text-foreground"
          >
            <span className="text-accent">&#9834;</span>
            Greg Mall
          </a>
          <ul className="flex gap-6 text-xs font-medium uppercase tracking-widest text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-accent-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-28 px-6 py-24">
        <section
          id="about"
          className="relative flex flex-col items-start gap-6"
        >
          <Vinyl className="pointer-events-none absolute -right-6 -top-14 hidden h-48 w-48 sm:block" />

          <span className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-widest text-muted">
            <EqBars />
            Open to new opportunities
          </span>

          <h1 className="font-display text-7xl leading-[0.9] tracking-wide text-transparent sm:text-8xl">
            <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text drop-shadow-[0_0_30px_rgba(255,47,146,0.35)]">
              Greg Mall
            </span>
          </h1>
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-accent-2">
            <span className="h-px w-8 bg-accent-2/60" />
            Software Engineer
            <span className="h-px w-8 bg-accent-2/60" />
          </p>
          <p className="max-w-xl text-lg leading-8 text-muted">
            I build things for the web. A life long musician and artist. I
            love to make things.
          </p>
          <div className="flex gap-4 pt-2 text-sm font-medium">
            <a
              href="#projects"
              className="rounded-full bg-linear-to-r from-accent to-accent-2 px-6 py-3 text-background shadow-[0_0_30px_-8px_var(--accent)] transition-transform hover:scale-105"
            >
              &#9654; View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-10">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Panel className="flex h-full flex-col gap-3 p-6 transition-all hover:-translate-y-1 hover:border-accent">
                  <span className="text-xs uppercase tracking-widest text-accent-2">
                    Track {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl tracking-wide text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2 text-xs">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 text-accent-2"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Panel>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="flex flex-col gap-10">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <Panel key={group.category} className="flex flex-col gap-3 p-6">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  <span>&#9834;</span>
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Panel>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col items-center gap-6 text-center"
        >
          <Panel className="flex w-full flex-col items-center gap-6 p-10">
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">
              The Green Room
            </h2>
            <p className="max-w-xl leading-7 text-muted">
              Open to new opportunities and interesting projects. Reach out
              through any of the links below.
            </p>
            <ul className="flex gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </Panel>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center text-xs uppercase tracking-widest text-muted">
        Greg Mall, human. On repeat since 2026.
      </footer>
    </div>
  );
}
