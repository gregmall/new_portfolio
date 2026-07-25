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

const tilts = ["-rotate-1", "rotate-1", "-rotate-1"];

function Card({
  children,
  className = "",
  tilt = "",
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card shadow-[0_6px_20px_-4px_rgba(58,46,38,0.15)] transition-transform duration-300 hover:rotate-0 ${tilt} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative z-10 flex flex-1 flex-col">
      <header className="border-b border-border">
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-5">
          <a href="#" className="font-serif text-xl italic">
            Greg Mall
          </a>
          <ul className="flex gap-6 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-20">
        <section id="about" className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-accent px-4 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            Open to new opportunities
          </span>
          <h1 className="font-serif text-6xl italic leading-[1.05] sm:text-7xl">
            Greg Mall
          </h1>
          <p className="squiggle-underline text-xl text-muted">
            Software Engineer
          </p>
          <p className="max-w-xl text-lg leading-8 text-foreground/80">
            I build things for the web. A life long musician and artist. I
            love to make things.
          </p>
          <div className="flex gap-4 pt-2 text-sm font-medium">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-[#fbf6ec] shadow-[0_6px_16px_-4px_rgba(193,98,45,0.5)] transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-10">
          <h2 className="font-serif text-3xl italic">
            <span className="text-accent">&#10022;</span> Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  tilt={tilts[i % tilts.length]}
                  className="flex h-full flex-col gap-3 p-6"
                >
                  <h3 className="font-serif text-lg">{project.name}</h3>
                  <p className="text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2 text-xs">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="flex flex-col gap-10">
          <h2 className="font-serif text-3xl italic">
            <span className="text-accent">&#10022;</span> Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <Card key={group.category} className="flex flex-col gap-3 p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col items-center gap-6 text-center"
        >
          <Card className="flex w-full flex-col items-center gap-6 p-10">
            <h2 className="font-serif text-3xl italic sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="max-w-xl text-lg leading-8 text-foreground/80">
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
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-accent hover:text-accent"
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
          </Card>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center font-serif text-sm italic text-muted">
        Greg Mall, human. 2026
      </footer>
    </div>
  );
}
